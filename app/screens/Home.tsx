import { View } from "react-native";
import { AppText } from "../components/appText";
import { GlobalStyles } from "../styles/globalStyles";

export default function HomeScreen() {
  return (
    <View style={GlobalStyles.yellowBackground}>
      <View style={GlobalStyles.fullWidthPaddedContainer}>
        <AppText text='Homepage' level='h1' />
      </View>
    </View>
  );
}
