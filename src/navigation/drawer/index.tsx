import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabs } from "../tab";
import CustomDrawerContent from "../../common/customDrawer";

const Drawer = createDrawerNavigator();

const SideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
      }}
    >
      <Drawer.Screen name="MainApp" component={BottomTabs} />
    </Drawer.Navigator>
  );
};

export default SideDrawer;
