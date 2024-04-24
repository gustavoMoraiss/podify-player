import React, {FC, useState} from 'react';
import {View, SafeAreaView, Button} from 'react-native';
import styles from './styles';
import AuthInputField from 'src/components/AuthInputField';
import {Formik} from 'formik';
import * as yup from 'yup';

const signupSchema = yup.object({
  name: yup
    .string()
    .trim('Name is missing!')
    .min(3, 'Invalid Name')
    .required('Name is required'),
  email: yup
    .string()
    .trim('Email is missing!')
    .email('Invalid Email')
    .required('Email is required'),
  password: yup
    .string()
    .trim('password is missing!')
    .min(8, 'Password is too short!')
    .required('password is required'),
});

interface Props {}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp: FC<Props> = props => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorInfo, setErrorInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        onSubmit={values => {
          console.log('values', values);
        }}
        validationSchema={signupSchema}
        initialValues={initialValues}>
        {({handleSubmit, handleChange, values, errors}) => {
          return (
            <View style={styles.formContainer}>
              <AuthInputField
                placeholder="Your name"
                label="Name"
                containerStyle={styles.marginBottom}
                onChange={handleChange('name')}
                value={values.name}
                errorMsg={errors.name}
              />
              <AuthInputField
                placeholder="email@email.com"
                label="Email"
                keyboardType="email-address"
                containerStyle={styles.marginBottom}
                onChange={handleChange('email')}
                value={values.email}
                errorMsg={errors.email}
              />
              <AuthInputField
                placeholder="********"
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                onChange={handleChange('password')}
                value={values.password}
                errorMsg={errors.password}
              />

              <Button title="Sign Up" onPress={handleSubmit} />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
