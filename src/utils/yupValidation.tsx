import * as yup from 'yup';

export const signUpFormValidation = () => {
  return yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(4),
    privacyPolicyCheck: yup.bool().isTrue(),
    termsConditions: yup.bool().isTrue(),
  });
};

export const emailValidation = (values: {email: string}) => {
  const errors: {email: string} = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};
