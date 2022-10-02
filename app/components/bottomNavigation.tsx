import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import SettingsScreen from "../screens/Settings";
import AddEventScreen from "../screens/AddEvent";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: '#FD397A',
          position: 'absolute',
          borderTopWidth: 0,
        },
        // tabBarActiveTintColor: 'black',
        // tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <View>
              <Icon name='home' size={30} color={focused ? "black" : 'white'} />
            </View>
          );
        },
      }}/>
      <Tab.Screen name='AddEvent' component={AddEventScreen}  options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <View>
              <Icon name='plus' size={30} color={focused ? "black" : 'white'} />
            </View>
          );
        },
      }}/>
      <Tab.Screen name='Settings' component={SettingsScreen}  options={{
        tabBarIcon: ({size,focused,color}) => {
          return (
            <View>
              <Icon name='cog' size={30} color={focused ? "black" : 'white'} />
            </View>
          );
        },
      }}/>
    </Tab.Navigator>
  );
}
