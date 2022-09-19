import { Formik } from "formik"
import { View, StyleSheet } from "react-native"
import Button from "../button"
import { LoginSchema } from "./formValidations"
import Input from "./input"


type IForm = {
  initialValues: {[x: string]: any}
  formFields: Array<{
    placeholder: string;
    fieldId: string;
  }>;
  handleFormSubmit: () => void;
}

export default function Form({ initialValues, formFields, handleFormSubmit }: IForm) {
  return (
    <View style={FormStyles.formWrap}>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          handleFormSubmit()
        }}
      >
        {(props) => (
          <View>
            {formFields.map(({ placeholder, fieldId }) => (
              <Input
                key={fieldId} 
                placeholder={placeholder}
                onChangeText={props.handleChange(fieldId)}
                value={props.values[fieldId]}
                errorMsg={props.touched[fieldId] && props.errors[fieldId]}
              />
            ))}      
            <Button 
              btnLabel="Log in to your account"
              onClick={() => props.handleSubmit()}
            />    
          </View>
        )}
      </Formik>
    </View>
  )
}

const FormStyles = StyleSheet.create({
  formWrap: {
    width: '100%',
    padding: 24,
  }
})