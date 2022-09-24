import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "./appText";

type IToggleButton = {
  mainText: string;
  description?: string;
  defaultIsOn: boolean;
};

export default function ToggleButton({
  mainText,
  description,
  defaultIsOn,
}: IToggleButton) {
  const [isOn, setIsOn] = useState(defaultIsOn);

  return (
    <View style={Styles.wrap}>
      <View style={Styles.toggleContainer} onTouchStart={() => setIsOn(!isOn)}>
        <View style={[Styles.toggle, isOn ? Styles.isOn : Styles.isOff]}>
          <AppText text={isOn ? "on" : "off"} level='overline' />
        </View>
      </View>
      <View style={Styles.toggleTexts}>
        <AppText text={mainText} level='body' />
        {description && <AppText text={description} level='helper' />}
      </View>
    </View>
  );
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
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  toggleContainer: {
    marginRight: 16,
    border: "solid",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    height: 50,
    width: 88,
    borderRadius: 16,
    position: "relative",
  },
  toggle: {
    padding: 8,
    backgroundColor: "#96c6d9",
    position: "absolute",
    top: 2,
    width: 44,
    height: 44,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  isOn: {
    left: 2,
  },
  isOff: {
    right: 2,
  },
});
