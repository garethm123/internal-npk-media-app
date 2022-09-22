import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

export const RegisterSchema = yup.object().shape({
  email: yup.string().required('Email is required').email("That's not a valid email"),
  username: yup.string().required('Choose a username'),
  password: yup.string()
    .matches(/^[0-9A-Za-z]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?][0-9a-zA-Z]*$/, 'Your password must contain at least 1 special character.')
    .max(29, 'Password cannot be longer than 29 characters')
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),

  confirmPassword: yup.string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
})