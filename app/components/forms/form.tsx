import { Formik } from "formik"
import { MutableRefObject } from "react"
import { View, StyleSheet, TextInput, Text } from "react-native"
import Button from "../button"

type IForm = {
  initialValues: {[x: string]: any}
  formFields: Array<{
    placeholder: string;
    fieldId: string;
  }>;
  validationSchema?: any;
  submitBtnText: string;
  handleFormSubmit: () => void;
  refs: Array<MutableRefObject<any>>
};

export default function Form({ initialValues, formFields, validationSchema, submitBtnText, handleFormSubmit, refs }: IForm) {

  const handleNextInput = (currIndex: number) => {
    if (currIndex + 1 > formFields.length - 1) return;
    refs[currIndex + 1].current.focus()
  }

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
            {formFields.map(({ placeholder, fieldId }, index) => (
              <View key={fieldId}>
                <TextInput
                  placeholder={placeholder} style={FormStyles.input}
                  onChangeText={props.handleChange(fieldId)}
                  value={props.values[fieldId]}
                  blurOnSubmit={index === formFields.length - 1}
                  returnKeyType={index === formFields.length - 1 ? 'done' : 'next'}
                  ref={refs[index]}
                  onSubmitEditing={() => handleNextInput(index)}
                />
                {props.touched[fieldId] && props.errors[fieldId] && (
                  <Text style={FormStyles.errorMsg}>
                    {props.errors[fieldId]?.toString()}
                  </Text>
                )}
              </View>
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
  },
  input: {
    width: '100%',
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#efefef'
  },
  errorMsg: {
    color: 'red',
    fontStyle: 'italic',
    marginTop: -8,
    marginBottom: 8
  }
})