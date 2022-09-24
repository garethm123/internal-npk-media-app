import { Image, View } from "react-native";
import { useContext } from "react";
import { AppText } from "../appText";
import Form from "../forms/form";
import {
  RegisterFormFields,
  RegisterFormFieldsInitialValues,
} from "../forms/formFields";
import { AuthContext } from "../../contexts/authContext";
import { GlobalStyles } from "../../styles/globalStyles";
import { RegisterSchema } from "../forms/formValidations";

export default function RegisterAccountModal({ closeModal }: any) {
  const { register } = useContext(AuthContext);

  return (
    <View style={GlobalStyles.ceteredContent}>
      <View>
        <Image source={require("../../assets/npkLogo.png")} />
        <AppText text='Register Account' level='h1' />
      </View>

      <Form
        initialValues={RegisterFormFieldsInitialValues}
        formFields={RegisterFormFields}
        // validationSchema={RegisterSchema}
        submitBtnText='Register'
        handleFormSubmit={() => register && register()}
      />
    </View>
  );
}
