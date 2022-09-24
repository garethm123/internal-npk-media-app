import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
import { View } from "react-native";
import AddEventScreen from "../screens/AddEvent";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='AddEvent' component={AddEventScreen} />
      {/* <Tab.Screen name='NotifyAll' component={}/> */}
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  );
}
