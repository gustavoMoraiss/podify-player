import React, {FC} from 'react';
import styles from './styles';
import {TextInput, View, TextInputProps} from 'react-native';
import colors from 'src/utils/colors';

interface Props extends TextInputProps {}

const AppInput: FC<Props> = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.INACTIVE_CONTRAST}
      style={[styles.input, props.style]}
    />
  );
};

export default React.memo(AppInput);
