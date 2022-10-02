import { useState } from "react";
import { Switch, View, StyleSheet } from "react-native";
import { AppText } from "./appText";

type IToggleButton = {
  mainText: string;
  description?: string;
  defaultIsOn: boolean;
};

export default function ToggleSwitch({
  mainText,
  description,
  defaultIsOn,
}: IToggleButton) {
  const [isOn, setIsOn] = useState<boolean>(defaultIsOn);

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <View style={Styles.wrap}>
      <Switch 
        onValueChange={handleToggle}
        value={isOn}
        trackColor={{true: '#96c6d9'}}
      />
      <View style={Styles.toggleTexts}>
        <AppText text={mainText} level='body' />
        {description && <AppText text={description} level='helper' />}
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  toggleTexts: {
    marginLeft: 16,
    flex: 1,
    display: "flex",
    flexDirection: "column",
  }
});
