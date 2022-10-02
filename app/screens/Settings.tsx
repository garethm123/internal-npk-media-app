import { useContext } from "react";
import { View } from "react-native";
import { AppText } from "../components/appText";
import Button from "../components/button";
import SettingsCard from "../components/settings/settingsCard";
import ToggleSwitch from "../components/toggleSwitch";
import { AuthContext } from "../contexts/authContext";
import { GlobalStyles } from "../styles/globalStyles";

export default function SettingsScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={GlobalStyles.yellowBackground}>
      <View style={GlobalStyles.fullWidthPaddedContainer}>
        <AppText text='Settings' level='h1' />

        <SettingsCard overline='Notifications'>
          <ToggleSwitch
            mainText='Push Notifications'
            description='Receive meetings and event reminders'
            defaultIsOn={true}
          />
          <ToggleSwitch
            mainText='Snooze Notifications'
            description='Snoozes all for 1 week'
            defaultIsOn={false}
          />
        </SettingsCard>

        <SettingsCard overline='Logout of your account'>
          <Button
            btnLabel='Logout'
            variant='dark'
            onClick={() => logout && logout()}
            extraStyles={{ alignSelf: "flex-start" }}
          />
        </SettingsCard>
      </View>
    </View>
  );
}
