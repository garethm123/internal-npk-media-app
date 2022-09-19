import { View, Text, Image } from 'react-native';
import Form from '../components/forms/form';
import { LoginFormFieldInitialValues, LoginFormFields } from '../components/forms/formFields';
import { useContext } from 'react';
import { globalStyles } from '../styles/globalStyles';
import { AuthContext } from '../contexts/authContext';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  return (
    <View>
      
      <Image source={require('../assets/npkLogo.png')} />
      
      <Text style={globalStyles.titleText}>
        NPK Calendar Sync
      </Text>

      <Form
        initialValues={LoginFormFieldInitialValues}
        formFields={LoginFormFields}
        handleFormSubmit={() => login && login()}
      />
    </View>
  )
}