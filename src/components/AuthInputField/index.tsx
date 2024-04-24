import React, {FC} from 'react';
import styles from './styles';
import {StyleProp, Text, TextInputProps, View, ViewStyle} from 'react-native';
import AppInput from 'src/ui/AppInput';
import {useFormikContext} from 'formik';

interface Props {
  name?: string;
  label?: string;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const AuthInputField: FC<Props> = props => {
  const {
    name,
    label,
    keyboardType,
    placeholder,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
  } = props;

  const {handleChange, values, errors, touched, handleBlur} = useFormikContext<{
    [key: string]: string;
  }>();

  const errorMsg = touched[name] && errors[name] ? errors[name] : '';

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
        onChangeText={handleChange(name)}
        value={values[name]}
        onBlur={handleBlur(name)}
      />
    </View>
  );
};

export default React.memo(AuthInputField);
