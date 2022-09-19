import { StyleSheet, TextInput, Text } from 'react-native';
import { ChangeEvent } from 'react';

type IInput = {
  placeholder: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  value: any;
  errorMsg: any
}

export default function Input({ placeholder, onChangeText, value, errorMsg }: IInput) {
  return (
    <>
      <TextInput 
        placeholder={placeholder} style={InputStyles.input}
        onChangeText={onChangeText}
        value={value}
      />
      {errorMsg && <Text style={InputStyles.errorMsg}>{errorMsg}</Text>}
    </>
  )
}

const InputStyles = StyleSheet.create({
  input: {
    width: '100%',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#efefef'
  },
  errorMsg: {
    color: 'red',
    fontStyle: 'italic',
    marginTop: -8,
    marginBottom: 8
  }
})