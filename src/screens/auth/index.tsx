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
        />
        <AuthInputField
          placeholder="email@email.com"
          label="Email"
          keyboardType="email-address"
          containerStyle={styles.marginBottom}
          onChange={text => {
            setUserInfo({...userInfo, email: text});
          }}
        />
        <AuthInputField
          placeholder="********"
          label="Password"
          autoCapitalize="none"
          secureTextEntry
          onChange={text => {
            setUserInfo({...userInfo, password: text});
          }}
        />

        <Button
          title="Sign Up"
          onPress={() => {
            console.log(userInfo);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
