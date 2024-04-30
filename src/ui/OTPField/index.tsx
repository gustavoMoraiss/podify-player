import React, {FC, forwardRef, useRef} from 'react';
import styles from './styles';
import {TextInput, TextInputProps, View} from 'react-native';
import colors from 'src/utils/colors';

interface Props extends TextInputProps {
  ref: any;
}

const OTPField = forwardRef<TextInput, Props>((props, ref) => {
  return (
    <TextInput
      {...props}
      ref={ref}
      style={[styles.input, props.style]}
      placeholderTextColor={colors.INACTIVE_CONTRAST}
    />
  );
});
export default React.memo(OTPField);
