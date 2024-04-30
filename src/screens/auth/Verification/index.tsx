import React, {FC, useEffect, useRef, useState} from 'react';
import {Keyboard, TextInput, View} from 'react-native';
import styles from './styles';
import SubmitBtn from 'src/components/SubmitBtn';
import AppLink from 'src/ui/AppLink';
import AuthFormContainer from 'src/components/AuthFormContainer';
import OTPField from 'src/ui/OTPField';
import AppButton from 'src/ui/AppButton';

interface Props {}

const otpFields = new Array(6).fill('');

const Verification: FC<Props> = props => {
  const [otp, setOtp] = useState([...otpFields]);
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const inputRef = useRef<TextInput>(null);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];

    if (value === 'Backspace') {
      if (!newOtp[index]) setActiveOtpIndex(index - 1);
      newOtp[index] = '';
    } else {
      setActiveOtpIndex(index + 1);
      newOtp[index] = value;
    }

    setOtp([...newOtp]);
  };
  const handlePaste = (value: string) => {
    if (value.length === 6) {
      Keyboard.dismiss();
      const newOtp = value.split('');
      setOtp([...newOtp]);
    }
  };

  const handleSubmit = () => {};

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);
  return (
    <AuthFormContainer heading="Please, look at to your email">
      <View style={styles.formContainer}>
        <View style={styles.otpContainer}>
          {otpFields.map((_, index) => {
            return (
              <OTPField
                ref={activeOtpIndex === index ? inputRef : null}
                key={index}
                placeholder="*"
                onKeyPress={({nativeEvent}) => {
                  handleChange(nativeEvent.key, index);
                }}
                onChangeText={handlePaste}
                keyboardType="numeric"
                value={otp[index] || ''}
              />
            );
          })}
        </View>
        <AppButton title="Submit" onPress={() => {}} />
        <View style={styles.linkContainer}>
          <AppLink linkValue="Re-send OTP" />
        </View>
      </View>
    </AuthFormContainer>
  );
};

export default React.memo(Verification);
