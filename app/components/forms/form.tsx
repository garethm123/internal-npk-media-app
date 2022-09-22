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
  validationSchema?: any;
  submitBtnText: string;
  handleFormSubmit: () => void;
};

export default function Form({ initialValues, formFields, validationSchema, submitBtnText, handleFormSubmit }: IForm) {
  return (
    <View style={FormStyles.formWrap}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema ?? null}
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
              btnLabel={submitBtnText}
              onClick={() => props.handleSubmit()}
              variant='dark'
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
    paddingVertical: 24
  }
})