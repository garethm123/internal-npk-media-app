import { StyleSheet } from 'react-native';

export const GlobalStyles = StyleSheet.create({
  titleText: {
    fontFamily: 'montserrat-bold',
    fontSize: 24,
    marginBottom: 16
  },
  bodyText: {
    fontFamily: 'montserrat-regular',
    fontSize: 18
  },
  yellowBackground: {
    backgroundColor: '#fba220',
    minHeight: '100%',
  },
  fullWidthPaddedContainer: {
    width: '100%',
    padding: 24,
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    // marginVertical: 90,
    display: 'flex',
    flex: 1,
    background: '#96c6d9'
  },
  ceteredContent: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})