import { KeyboardAvoidingView, Platform } from "react-native"

export default function KeyboardView({ children }: any){
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
      { children }
    </KeyboardAvoidingView>
  )
}