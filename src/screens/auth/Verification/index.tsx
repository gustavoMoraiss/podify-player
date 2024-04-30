import React, {FC, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import SubmitBtn from 'src/components/SubmitBtn';
import AppLink from 'src/ui/AppLink';
import AuthFormContainer from 'src/components/AuthFormContainer';
import OTPField from 'src/ui/OTPField';
import AppButton from 'src/ui/AppButton';

interface Props {}

const otpFields = new Array(6).fill('');

const Verification: FC<Props> = props => {
  return (
    <AuthFormContainer heading="Please, look at to your email">
      <View style={styles.formContainer}>
        <View style={styles.otpContainer}>
          {otpFields.map((_, index) => {
            return <OTPField key={index} />;
          })}
        </View>
        <AppButton title="Submit" onSubmit={() => {}} />
        <View style={styles.linkContainer}>
          <AppLink linkValue="Re-send OTP" />
        </View>
      </View>
    </AuthFormContainer>
  );
};

export default React.memo(Verification);
