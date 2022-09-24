import { View, Image } from "react-native";
import Form from "../forms/form";
import {
  LoginFormFieldInitialValues,
  LoginFormFields,
} from "../forms/formFields";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { AppText } from "../appText";
import { GlobalStyles } from "../../styles/globalStyles";
import { LoginSchema } from "../forms/formValidations";

export default function LoginModal() {
  const { login } = useContext(AuthContext);

  return (
    <View style={GlobalStyles.ceteredContent}>
      <Image source={require("../../assets/npkLogo.png")} />
      <AppText text='Login to your account' level='h1' />

      <Form
        initialValues={LoginFormFieldInitialValues}
        formFields={LoginFormFields}
        validationSchema={LoginSchema}
        handleFormSubmit={() => login && login()}
        submitBtnText='Login'
      />
    </View>
  );
}
