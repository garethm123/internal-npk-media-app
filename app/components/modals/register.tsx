import { Image, View } from "react-native";
import { useContext, useRef } from "react";
import { AppText } from "../appText";
import Form from "../forms/form";
import {
  RegisterFormFields,
  RegisterFormFieldsInitialValues,
} from "../forms/formFields";
import { AuthContext } from "../../contexts/authContext";
import { GlobalStyles } from "../../styles/globalStyles";
import { RegisterSchema } from "../forms/formValidations";
import KeyboardView from "../keyboardView";

export default function RegisterAccountModal({ closeModal }: any) {
  const { register } = useContext(AuthContext);

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  return (
    <View style={GlobalStyles.ceteredContent}>
      <KeyboardView>
        <View>
          <Image source={require("../../assets/npkLogo.png")} style={{ marginBottom: 16 }} />
          <AppText text='Register Account' level='h1' />
        </View>

        <Form
          initialValues={RegisterFormFieldsInitialValues}
          formFields={RegisterFormFields}
          // validationSchema={RegisterSchema}
          submitBtnText='Register'
          handleFormSubmit={() => register && register()}
          refs={[emailRef, usernameRef, passwordRef, passwordConfirmRef]}
        />
      </KeyboardView>
    </View>
  );
}
