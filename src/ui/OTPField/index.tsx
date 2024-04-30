import React, {FC} from 'react';
import styles from './styles';
import {TextInput, TextInputProps, View} from 'react-native';
import colors from 'src/utils/colors';

interface Props extends TextInputProps {}

const OTPField: FC<Props> = props => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.INACTIVE_CONTRAST}></TextInput>
  );
};

export default React.memo(OTPField);
