import React, { useRef, useEffect, useState, ReactNode } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from "react-native";

interface DropdownMenuProps {
  visible: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  dropdownWidth?: number;
  position?: "left" | "right" | "center";
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  visible,
  handleOpen,
  handleClose,
  trigger,
  children,
  dropdownWidth = 150,
  position = "left",
}) => {
  const triggerRef = useRef<View>(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    if (triggerRef.current && visible) {
      setTimeout(() => {
        triggerRef.current?.measureInWindow((px, py, width, height) => {
          let newX = px; // Default to left

          if (position === "right") {
            newX = px + width - dropdownWidth;
          } else if (position === "center") {
            newX = px + width / 2 - dropdownWidth / 2;
          }

          // Prevent overflow
          if (newX + dropdownWidth > screenWidth) {
            newX = screenWidth - dropdownWidth - 10; // Keep it inside screen bounds
          } else if (newX < 0) {
            newX = 10; // Avoid going off-screen
          }

          setMenuPosition({
            x: newX,
            y: py + height + 5, // Position below trigger
          });
        });
      }, 100);
    }
  }, [visible]);

  return (
    <View>
      <TouchableWithoutFeedback onPress={handleOpen}>
        <View ref={triggerRef}>{trigger}</View>
      </TouchableWithoutFeedback>
      {visible && (
        <Modal
          transparent={true}
          visible={visible}
          animationType="fade"
          onRequestClose={handleClose}
        >
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.modalOverlay}>
              <View
                style={[
                  styles.menu,
                  {
                    top: menuPosition.y,
                    left: menuPosition.x,
                    width: dropdownWidth,
                  },
                ]}
              >
                {children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </View>
  );
};

export const MenuOption = ({
  onSelect,
  children,
}: {
  onSelect?: () => void;
  children: ReactNode;
}) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.menuOption}>
      {children}
    </TouchableOpacity>
  );
};

export const MenuTrigger = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "transparent",
  },
  menu: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  menuOption: {
    padding: 10,
  },
});
