import React, {FC, useState} from 'react';
import {View, SafeAreaView, Button} from 'react-native';
import styles from './styles';
import AuthInputField from 'src/components/AuthInputField';
import {Formik, useFormikContext} from 'formik';
import * as yup from 'yup';
import Form from 'src/components/Form';
import SubmitBtn from 'src/components/SubmitBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import PasswordVisibilityIcon from 'src/ui/PasswordVisibilityIcon';
import AppLink from 'src/ui/AppLink';
import colors from 'src/utils/colors';
import CircleUi from 'src/ui/CircleUi';

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
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const togglePasswordView = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CircleUi size={200} position="top-left" />
      <CircleUi size={100} position="top-right" />
      <CircleUi size={100} position="bottom-left" />
      <CircleUi size={200} position="bottom-right" />
      <Form
        onSubmit={values => {
          console.log('values', values);
        }}
        validationSchema={signupSchema}
        initialValues={initialValues}>
        <View style={styles.formContainer}>
          <AuthInputField
            name="name"
            placeholder="Your name"
            label="Name"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="email"
            placeholder="email@email.com"
            label="Email"
            keyboardType="email-address"
            containerStyle={styles.marginBottom}
          />
          <AuthInputField
            name="password"
            placeholder="********"
            label="Password"
            autoCapitalize="none"
            secureTextEntry={secureEntry}
            containerStyle={styles.marginBottom}
            rightIcon={<PasswordVisibilityIcon privateIcon={secureEntry} />}
            onRightIconPress={togglePasswordView}
          />
          <SubmitBtn title="Sign Up" />
          <View style={styles.linkContainer}>
            <AppLink linkValue="I Lost my password" />
            <AppLink linkValue="Sign In" />
          </View>
        </View>
      </Form>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
