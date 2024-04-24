import React, {FC} from 'react';
import styles from './styles';
import {StyleProp, Text, TextInputProps, View, ViewStyle} from 'react-native';
import AppInput from 'src/ui/AppInput';

interface Props {
  label?: string;
  errorMsg?: string;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
}

const AuthInputField: FC<Props> = props => {
  const {
    label,
    errorMsg,
    keyboardType,
    placeholder,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
    onChange,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.erroMsg}>{errorMsg}</Text>
      </View>
      <AppInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
      />
    </View>
  );
};

export default React.memo(AuthInputField);
