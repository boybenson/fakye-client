import React, { useCallback, useMemo } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

type Iprops = {
  bottomSheetRef?: any;
  children?: any;
  snapPoints?: any;
};

const Sheet = ({ bottomSheetRef, children, snapPoints }: Iprops) => {
  const breakPoints = useMemo(() => snapPoints, []);

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
      snapPoints={breakPoints}
      handleComponent={null}
    >
      <BottomSheetView style={{ flex: 1 }}>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default Sheet;
