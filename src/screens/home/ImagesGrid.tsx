import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import ImageView from "react-native-image-viewing";

const ImagesGrid = ({ images }: any) => {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onImagePress = (index: number) => {
    setCurrentIndex(index);
    setVisible(true);
  };

  const imageViewerData = images.map((img: any) => ({
    uri: img,
  }));

  const renderGrid = () => {
    if (images.length === 1) {
      return (
        <TouchableOpacity
          onPress={() => onImagePress(0)}
          className="w-full h-64 overflow-hidden"
        >
          <Image
            source={{ uri: images[0] }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
    } else if (images.length === 2) {
      return (
        <View className="flex-row justify-between">
          {images.map((img: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => onImagePress(index)}
              className="w-[48%] overflow-hidden"
            >
              <Image
                source={{ uri: img }}
                className="w-full h-40"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      );
    } else if (images.length === 3) {
      return (
        <View className="flex-row w-full">
          <View className="w-1/2 space-y-0.5">
            <TouchableOpacity
              onPress={() => onImagePress(0)}
              className="w-full h-40 overflow-hidden"
            >
              <Image
                source={{ uri: images[0] }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onImagePress(1)}
              className="w-full h-40 overflow-hidden"
            >
              <Image
                source={{ uri: images[1] }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => onImagePress(2)}
            className="w-1/2 h-80 ml-1 overflow-hidden"
          >
            <Image
              source={{ uri: images[2] }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
      );
    } else if (images.length === 4) {
      return (
        <View className="flex-row flex-wrap justify-between">
          {images.map((img: any, index: number) => (
            <TouchableOpacity
              key={index}
              onPress={() => onImagePress(index)}
              className="w-[48%] overflow-hidden"
            >
              <Image
                source={{ uri: img }}
                className="w-full h-40"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <View>
      {renderGrid()}
      <ImageView
        images={imageViewerData}
        imageIndex={currentIndex}
        visible={visible}
        onRequestClose={() => setVisible(false)}
        swipeToCloseEnabled={true}
      />
    </View>
  );
};

export default ImagesGrid;
