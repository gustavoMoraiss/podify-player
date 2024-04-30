import React, {FC, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import AuthInputField from 'src/components/AuthInputField';
import * as yup from 'yup';
import Form from 'src/components/Form';
import SubmitBtn from 'src/components/SubmitBtn';
import AppLink from 'src/ui/AppLink';
import AuthFormContainer from 'src/components/AuthFormContainer';

const lostPasswordSchema = yup.object({
  email: yup
    .string()
    .trim('Email is missing!')
    .email('Invalid Email')
    .required('Email is required'),
});

interface Props {}

const initialValues = {
  email: '',
};

const LostPassword: FC<Props> = props => {
  return (
    <Form
      onSubmit={values => {
        console.log('values', values);
      }}
      validationSchema={lostPasswordSchema}
      initialValues={initialValues}>
      <AuthFormContainer
        heading="Forget Password!"
        subHeading="Oops, did you forget your password? Don't worry, we'll help you get back in.">
        <View style={styles.formContainer}>
          <AuthInputField
            name="email"
            placeholder="email@email.com"
            label="Email"
            keyboardType="email-address"
            containerStyle={styles.marginBottom}
          />
          <SubmitBtn title="Send Link" />
          <View style={styles.linkContainer}>
            <AppLink linkValue="Sign In" />
            <AppLink linkValue="Sign Up" />
          </View>
        </View>
      </AuthFormContainer>
    </Form>
  );
};

export default React.memo(LostPassword);
