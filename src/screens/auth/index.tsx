import React, {FC, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';
import styles from './styles';
import colors from 'src/utils/colors';
import AppInput from 'src/ui/AppInput';
import AuthInputField from 'src/components/AuthInputField';
import {Formik} from 'formik';

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
        initialValues={initialValues}>
        {({handleSubmit, handleChange, values}) => {
          return (
            <View style={styles.formContainer}>
              <AuthInputField
                placeholder="Your name"
                label="Name"
                containerStyle={styles.marginBottom}
                onChange={handleChange('name')}
                errorMsg={errorInfo.name}
                value={values.name}
              />
              <AuthInputField
                placeholder="email@email.com"
                label="Email"
                keyboardType="email-address"
                containerStyle={styles.marginBottom}
                onChange={handleChange('email')}
                errorMsg={errorInfo.email}
                value={values.email}
              />
              <AuthInputField
                placeholder="********"
                label="Password"
                autoCapitalize="none"
                secureTextEntry
                onChange={handleChange('password')}
                errorMsg={errorInfo.password}
                value={values.password}
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
