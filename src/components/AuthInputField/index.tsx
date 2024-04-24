import React, {FC, useEffect} from 'react';
import styles from './styles';
import {StyleProp, Text, TextInputProps, View, ViewStyle} from 'react-native';
import AppInput from 'src/ui/AppInput';
import {useFormikContext} from 'formik';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

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

  const inputTransformValue = useSharedValue(0);

  const shakeUI = () => {
    inputTransformValue.value = withSequence(
      withTiming(-10, {duration: 50}),
      withSpring(0, {
        damping: 8,
        mass: 0.5,
        stiffness: 1000,
        restDisplacementThreshold: 0.1,
      }),
    );
  };

  const {handleChange, values, errors, touched, handleBlur} = useFormikContext<{
    [key: string]: string;
  }>();

  const errorMsg = touched[name] && errors[name] ? errors[name] : '';

  const inputStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: inputTransformValue.value}],
    };
  });

  useEffect(() => {
    if (errorMsg) shakeUI();
  }, [errorMsg]);

  return (
    <Animated.View style={[containerStyle, inputStyle]}>
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
    </Animated.View>
  );
};

export default React.memo(AuthInputField);
