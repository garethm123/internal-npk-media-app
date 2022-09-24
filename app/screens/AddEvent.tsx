import { useContext } from "react";
import { View } from "react-native";
import { AppText } from "../components/appText";
import { AuthContext } from "../contexts/authContext";
import LoggedOutScreen from "./loggedOut";

export default function AddEventScreen() {
  const { authed } = useContext(AuthContext);

  if (!authed) {
    return <LoggedOutScreen />;
  }

  return (
    <View>
      <AppText text='Add event' level='body' />
    </View>
  );
}
