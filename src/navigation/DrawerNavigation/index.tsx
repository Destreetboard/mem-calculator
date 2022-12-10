import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../../screens/HomeScreen";
import DrawerContent from "../../components/DrawerContent/indext";

const Drawer = createDrawerNavigator();

interface DrawerNavigationProps {}

const DrawerNavigation: React.FC<DrawerNavigationProps> = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...(props as any)} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
