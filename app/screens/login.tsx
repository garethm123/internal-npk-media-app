import { View, Image } from 'react-native';
import Form from '../components/forms/form';
import { LoginFormFieldInitialValues, LoginFormFields } from '../components/forms/formFields';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { AppText } from '../components/appText';
import { globalStyles } from '../styles/globalStyles';
import Button from '../components/button';
import { LoginSchema } from '../components/forms/formValidations';

export default function LoginScreen({ navigation }: any) {
  const { login } = useContext(AuthContext);

  return (
    <View style={globalStyles.fullWidthPaddedContainer}> 

      <View>
        <Image source={require('../assets/npkLogo.png')} />
        <AppText str='Login to your account' level='h1' />
      </View>

      <Form
        initialValues={LoginFormFieldInitialValues}
        formFields={LoginFormFields}
        validationSchema={LoginSchema}
        handleFormSubmit={() => login && login()}
        submitBtnText='Login'
      />
      
      <Button 
        onClick={() => navigation.navigate('Register')}
        variant='light'
        btnLabel='Register an account'
      />
    </View>
  )
}

