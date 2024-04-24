import React, {FC} from 'react';
import styles from './styles';
import {StyleProp, Text, TextInputProps, View, ViewStyle} from 'react-native';
import AppInput from 'src/ui/AppInput';

interface Props {
  label?: string;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  secureTextEntry?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
}

const AuthInputField: FC<Props> = props => {
  const {
    keyboardType,
    placeholder,
    label,
    autoCapitalize,
    secureTextEntry,
    containerStyle,
    onChange,
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
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
