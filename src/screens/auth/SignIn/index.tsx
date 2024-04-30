import React, {FC, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import AuthInputField from 'src/components/AuthInputField';
import * as yup from 'yup';
import Form from 'src/components/Form';
import SubmitBtn from 'src/components/SubmitBtn';
import PasswordVisibilityIcon from 'src/ui/PasswordVisibilityIcon';
import AppLink from 'src/ui/AppLink';
import AuthFormContainer from 'src/components/AuthFormContainer';

const signInSchema = yup.object({
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
  email: '',
  password: '',
};

const SignIn: FC<Props> = props => {
  const [secureEntry, setSecureEntry] = useState<boolean>(true);

  const togglePasswordView = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <Form
      onSubmit={values => {
        console.log('values', values);
      }}
      validationSchema={signInSchema}
      initialValues={initialValues}>
      <AuthFormContainer heading="Welcome back!">
        <View style={styles.formContainer}>
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
          <SubmitBtn title="Sign In" />
          <View style={styles.linkContainer}>
            <AppLink linkValue="I Lost my password" />
            <AppLink linkValue="Sign In" />
          </View>
        </View>
      </AuthFormContainer>
    </Form>
  );
};

export default React.memo(SignIn);
