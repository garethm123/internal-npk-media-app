import { TouchableOpacity, StyleSheet } from "react-native";
import { AppText } from "./appText";

type IButton = {
  btnLabel: string;
  onClick: () => void;
}

export default function Button({ btnLabel, onClick }: IButton) {
  return (
    <TouchableOpacity style={ButtonStyles.button} onPress={() => onClick()}>
      <AppText str={btnLabel} level='body'/>
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