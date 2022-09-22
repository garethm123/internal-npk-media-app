import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';
import { useLoadResources } from './hooks/useLoadResources';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider, { AuthContext } from './contexts/authContext';
import LoginScreen from './screens/login';
import Button from './components/button';
import { AppText } from './components/appText';
import MainAppScreen from './screens/mainApp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterAccountScreen from './screens/register';

const Stack = createNativeStackNavigator();

export default function App() {
	const appIsReady = useLoadResources();

	if (!appIsReady) {
		return null;
	} else {
		return (
			<SafeAreaProvider>
        <AuthProvider>
				  <NavigationContainer>
            <AppContents />
            {/* <Stack.Navigator>
              <AppContents />
            </Stack.Navigator> */}
				  </NavigationContainer>
        </AuthProvider>
			</SafeAreaProvider>
		);
	}
}

{/* <Stack.Navigator>
<Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
<Stack.Group screenOptions={{ presentation: 'modal' }}>
  <Stack.Screen name="Modal" component={ModalScreen} />
</Stack.Group>
</Stack.Navigator> */}



              
const AppContents = () => {
	const { authed } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {authed ? (
        <>
          <Stack.Screen name='Main' component={MainAppScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterAccountScreen} />
        </>
      )}
    </Stack.Navigator>
  )

	return (
		<View style={styles.container}>
			{/* {authed ? (
        <MainAppScreen />
      ) : (
        <LoginScreen />
      )} */}
			<StatusBar style='auto' />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
});
