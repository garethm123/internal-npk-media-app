import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "../appText";

type ISettingCard = {
  title?: string;
  overline?: string;
  children: ReactNode;
};

export default function SettingsCard({
  title,
  overline,
  children,
}: ISettingCard) {
  return (
    <View style={CardStyles.wrap}>
      {overline && <AppText text={overline} level='overline' />}
      {title && <AppText text={title} level='h2' />}
      <View style={CardStyles.contents}>{children}</View>
    </View>
  );
}

const CardStyles = StyleSheet.create({
  wrap: {
    width: "100%",
    borderRadius: 4,
    padding: 24,
    border: "solid",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 24,
  },
  contents: {
    paddingTop: 16,
  },
});
