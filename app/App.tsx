// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from "react-native";
import { useLoadResources } from "./hooks/useLoadResources";
import AuthProvider, { AuthContext } from "./contexts/authContext";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./components/bottomNavigation";
import { useContext } from "react";
import LoggedOutScreen from "./screens/loggedOut";

export default function App() {
  const appIsReady = useLoadResources();

  if (!appIsReady) {
    return null;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fba220" }}>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </SafeAreaView>
    );
  }
}

const AppContent = () => {
  const { authed } = useContext(AuthContext)

  if (authed) {
    return (
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    )
  } else {
    return <LoggedOutScreen />
  }
}