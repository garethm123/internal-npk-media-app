import { Text, StyleSheet } from "react-native";

type IAppText = {
  text: string;
  level:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body"
    | "helper"
    | "overline"
    | "error";
};

export const AppText = ({ text, level }: IAppText) => {
  return <Text style={AppTextStyles[level]}>{text}</Text>;
};

const AppTextStyles = StyleSheet.create({
  h1: {
    fontSize: 32,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 22,
  },
  h4: {
    fontSize: 18,
  },
  h5: {
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
  overline: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  helper: {
    fontSize: 14,
    fontStyle: "italic",
  },
  error: {
    fontSize: 16,
    color: "red",
  },
});
