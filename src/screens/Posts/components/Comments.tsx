import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React from "react";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";

const Comments = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <BottomSheetScrollView>
          {Array(50)
            .fill(1)
            .map((id, idx) => {
              return <Text key={idx}>hey</Text>;
            })}
        </BottomSheetScrollView>
      </View>
      <View style={{ position: "absolute", bottom: 40, left: 0, right: 0 }}>
        <View className="border-t border-[#6B7280] py-1" />
        <View className="flex flex-row mx-auto w-[95%] space-x-2">
          <TextInput className="border border-[#6B7280] flex-1 rounded-3xl p-0.5 px-2" />
          <TouchableOpacity className="bg-main_green rounded-full p-0.5 flex items-center justify-center">
            <Image
              source={require("../../../assets/images/send.png")}
              className="h-10 w-10 rounded-full"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Comments;
