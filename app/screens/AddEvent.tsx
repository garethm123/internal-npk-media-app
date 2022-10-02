import { View } from "react-native";
import { AppText } from "../components/appText";
import { GlobalStyles } from "../styles/globalStyles";

export default function AddEventScreen() {


  return (
    <View style={GlobalStyles.yellowBackground}>
      <View style={GlobalStyles.fullWidthPaddedContainer}>
        <AppText text='Add Event' level='h1' />
      </View>
    </View>
  );
}
