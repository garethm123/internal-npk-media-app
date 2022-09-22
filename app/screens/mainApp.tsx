import { useContext } from 'react';
import { View } from "react-native";
import { AppText } from "../components/appText";
import Button from "../components/button";
import { AuthContext } from "../contexts/authContext";
import { globalStyles } from '../styles/globalStyles';

export default function MainAppScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={globalStyles.fullWidthPaddedContainer}>
      <AppText str='You are logged in' level='h1' />
      <Button onClick={() => logout && logout()} btnLabel='logoout' variant='dark'/>
    </View>
  )
}