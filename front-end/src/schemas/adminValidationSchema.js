import * as yup from 'yup';

const validationSchema = yup.object().shape({
    
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .min(2, 'Password must be at least 2 characters'),
});

export default validationSchema