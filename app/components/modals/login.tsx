import { View, Image } from "react-native";
import Form from "../forms/form";
import {
  LoginFormFieldInitialValues,
  LoginFormFields,
} from "../forms/formFields";
import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/authContext";
import { AppText } from "../appText";
import { GlobalStyles } from "../../styles/globalStyles";
import { LoginSchema } from "../forms/formValidations";
import KeyboardView from "../keyboardView";

export default function LoginModal() {
  const { login } = useContext(AuthContext);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <View style={GlobalStyles.ceteredContent}>
      <KeyboardView>
        <Image source={require("../../assets/npkLogo.png")} style={{ marginBottom: 16 }}/>
        <AppText text='Login to your account' level='h1' />

        <Form
          initialValues={LoginFormFieldInitialValues}
          formFields={LoginFormFields}
          validationSchema={LoginSchema}
          handleFormSubmit={() => login && login()}
          submitBtnText='Login'
          refs={[usernameRef, passwordRef]}
        />
      </KeyboardView>
    </View>
  );
}
