// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native";
import { useLoadResources } from "./hooks/useLoadResources";
import AuthProvider from "./contexts/authContext";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./components/bottomNavigation";

export default function App() {
  const appIsReady = useLoadResources();

  if (!appIsReady) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fba220" }}>
        <AuthProvider>
          <NavigationContainer>
            <BottomNavigation />
          </NavigationContainer>
        </AuthProvider>
      </SafeAreaView>
    );
  }
}
