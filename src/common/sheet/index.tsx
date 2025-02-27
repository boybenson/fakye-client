import React, { useCallback, useMemo } from "react";
import { Text } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type Iprops = {
  bottomSheetRef?: any;
};

const Sheet = ({ bottomSheetRef }: Iprops) => {
  const snapPoints = useMemo(() => ["45%", "75%"], []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        pressBehavior="close"
        enableTouchThrough={true}
        opacity={0.5}
        behavior="fill"
      />
    ),
    []
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}
      index={1}
      stackBehavior="push"
      snapPoints={snapPoints}
      handleComponent={null}
    >
      <BottomSheetView>
        <Text>Awesome 🎉</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default Sheet;
