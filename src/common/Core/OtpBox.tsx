import { TextInput, View, TouchableOpacity, Platform } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import * as Clipboard from "expo-clipboard";

const OtpBox = ({ onComplete }: any) => {
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const lastPastedText = useRef<string>("");

  const handleSMSAutoFill = (text: string) => {
    if (text === lastPastedText.current) return;
    lastPastedText.current = text;

    const match = text.match(/\d{4}/);
    if (match) {
      const otpArray = match[0].split("");
      setOtp([...otpArray]);
    }
  };

  const handleChangeText = (text: string, index: number) => {
    if (text.length > 1) {
      handleSMSAutoFill(text);
      return;
    }

    const newOtp = [...otp];
    const numericText = text.replace(/[^0-9]/g, "");
    newOtp[index] = numericText;
    setOtp(newOtp);

    if (numericText && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = async (index: number) => {
    try {
      const text = await Clipboard.getStringAsync();
      handleSMSAutoFill(text);
    } catch (error) {}
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      const newOtp = [...otp];

      if (newOtp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleBoxTap = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  useEffect(() => {
    otp.forEach((value, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]?.setNativeProps({ text: value });
      }
    });
  }, [otp]);

  useEffect(() => {
    onComplete(otp.join(""));
  }, [otp]);

  return (
    <View className="flex flex-row space-x-2">
      {otp.map((digit, idx) => (
        <TouchableOpacity
          key={idx}
          activeOpacity={0.7}
          onPress={() => handleBoxTap(idx)}
          onLongPress={() => handlePaste(idx)}
        >
          <TextInput
            ref={(el) => (inputRefs.current[idx] = el)}
            maxLength={idx === 0 ? 4 : 1}
            keyboardType="number-pad"
            returnKeyType="next"
            defaultValue={digit}
            onChangeText={(text) => handleChangeText(text, idx)}
            onKeyPress={(e) => handleKeyPress(e, idx)}
            className={`border ${
              digit ? "border-main_green" : "border-main_gray/50"
            } rounded-md mt-1.5 h-12 w-12 font-bold text-lg text-center`}
            textContentType={Platform.OS === "ios" ? "oneTimeCode" : "none"}
            autoComplete={Platform.OS === "android" ? "sms-otp" : "off"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OtpBox;
