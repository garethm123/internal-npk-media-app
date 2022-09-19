import { View, Image } from 'react-native';
import Form from '../components/forms/form';
import { LoginFormFieldInitialValues, LoginFormFields } from '../components/forms/formFields';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { AppText } from '../components/appText';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  return (
    <View>
      
      <Image source={require('../assets/npkLogo.png')} />
      
      <AppText str='NPK Calendar Sync' level='h1' />

      <Form
        initialValues={LoginFormFieldInitialValues}
        formFields={LoginFormFields}
        handleFormSubmit={() => login && login()}
      />
    </View>
  )
}