import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { useLoadResources } from './hooks/useLoadResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider, { AuthContext } from './contexts/authContext';
import LoginScreen from './screens/login';
import Button from './components/button';


export default function App() {
  const appIsReady = useLoadResources();


  if (!appIsReady) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <AppContents />
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}

const AppContents = () => {
  const { authed, logout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      {authed ? (
        <View>
          <Text>Logged in</Text>
          <Button onClick={() => logout && logout()} btnLabel='logoout'/>
        </View>
      ) : (
        <LoginScreen />
      )}
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'montserrat-regular'
  }
});
