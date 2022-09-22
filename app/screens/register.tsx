import { Image, View } from "react-native";
import { useContext } from 'react';
import { AppText } from "../components/appText";
import Form from "../components/forms/form";
import { RegisterFormFields, RegisterFormFieldsInitialValues } from "../components/forms/formFields";
import { AuthContext } from "../contexts/authContext";
import { globalStyles } from "../styles/globalStyles";
import { RegisterSchema } from "../components/forms/formValidations";

export default function RegisterAccountScreen({ navigation }: any) {
  const { register } = useContext(AuthContext);

  return (
    <View style={globalStyles.fullWidthPaddedContainer}>
      <View>
        <Image source={require('../assets/npkLogo.png')} />
        <AppText str='Register Account' level='h1' />
      </View>

      <Form 
        initialValues={RegisterFormFieldsInitialValues}
        formFields={RegisterFormFields}
        // validationSchema={RegisterSchema}
        submitBtnText='Register'
        handleFormSubmit={() => register && register()}
      />
    </View>
  )
}