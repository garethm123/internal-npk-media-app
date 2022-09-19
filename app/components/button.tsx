import { TouchableOpacity, Text, StyleSheet } from "react-native";

type IButton = {
  btnLabel: string;
  onClick: () => void;
}

export default function Button({ btnLabel, onClick }: IButton) {
  return (
    <TouchableOpacity style={ButtonStyles.button} onPress={() => onClick()}>
      <Text style={ButtonStyles.buttonText}>{btnLabel}</Text>
    </TouchableOpacity>
  )
}

const ButtonStyles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'blue',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white'
  }
})