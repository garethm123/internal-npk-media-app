import { Text, StyleSheet } from 'react-native';

type IAppText = {
  str: string;
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'overline' | 'error'
}

export const AppText = ({ str, level }: IAppText) => {
  return (
    <Text style={AppTextStyles[level]}>
      { str }
    </Text>
  )
}

const AppTextStyles = StyleSheet.create({
  h1: {

  },
  h2: {

  },
  h3: {

  },
  h4: {

  },
  h5: {

  },
  body: {

  },
  overline: {

  },
  error: {
    
  }
})