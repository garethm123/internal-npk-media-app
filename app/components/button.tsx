import { TouchableOpacity, StyleSheet, Text } from "react-native";

type IButton = {
  btnLabel: string;
  onClick: () => void;
  variant: 'dark' | 'light';
}

export default function Button({ btnLabel, onClick, variant }: IButton) {
  return (
    <TouchableOpacity style={variant === 'dark' ? ButtonStyles.touchableDark : ButtonStyles.touchableLight} onPress={() => onClick()}>
      <Text style={variant === 'dark' ? ButtonStyles.textDark : ButtonStyles.textLight}>
        {btnLabel}
      </Text>    
    </TouchableOpacity>
  )
};

const ButtonStyles = StyleSheet.create({
  touchableDark: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  touchableLight: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  textDark: {
    color: 'rgba(255, 255, 255, 0.8)'
  },
  textLight: {  
    color: 'rgba(0, 0, 0, 0.8)'
  }
})