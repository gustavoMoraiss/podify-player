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

interface Props {}

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
      <View style={styles.formContainer}>
        <AuthInputField
          placeholder="Your name"
          label="Name"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, name: text});
          }}
          errorMsg={errorInfo.name}
        />
        <AuthInputField
          placeholder="email@email.com"
          label="Email"
          keyboardType="email-address"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, email: text});
          }}
          errorMsg={errorInfo.email}
        />
        <AuthInputField
          placeholder="********"
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          onChange={text => {
            setUserInfo({...userInfo, password: text});
          }}
          errorMsg={errorInfo.password}
        />

        <Button
          title="Sign Up"
          onPress={() => {
            if (!userInfo.name)
              return setErrorInfo({
                email: '',
                password: '',
                name: 'Name is missing!',
              });

            if (!userInfo.email)
              return setErrorInfo({
                name: '',
                password: '',
                email: 'Email is missing!',
              });

            if (!userInfo.password)
              return setErrorInfo({
                name: '',
                email: '',
                password: 'Password is missing!',
              });

            setErrorInfo({
              name: '',
              email: '',
              password: '',
            });
            console.log(userInfo);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
