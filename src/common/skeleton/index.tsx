import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

export const SquareSkeleton = ({
  width,
  height,
}: {
  width?: any;
  height?: any;
}) => {
  return (
    <MotiView
      transition={{
        type: "decay",
      }}
    >
      <Skeleton
        width={width ?? "100%"}
        height={height ?? 200}
        backgroundColor="#FFFFFF"
      />
    </MotiView>
  );
};

export const CircleSkeleton = ({
  width,
  height,
}: {
  width?: any;
  height?: any;
}) => {
  return (
    <MotiView
      transition={{
        type: "timing",
      }}
    >
      <Skeleton
        radius="round"
        height={height ?? 75}
        width={width ?? 75}
        backgroundColor="#FFFFFF"
      />
    </MotiView>
  );
};
