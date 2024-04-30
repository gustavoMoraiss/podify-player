import React, {FC, ReactNode} from 'react';
import styles from './styles';
import {Image, StatusBar, Text, View} from 'react-native';
import CircleUi from 'src/ui/CircleUi';
import colors from 'src/utils/colors';

interface Props {
  children: ReactNode;
  heading?: string;
  subHeading?: string;
}

const AuthFormContainer: FC<Props> = props => {
  const {children, heading, subHeading} = props;

  return (
    <View style={styles.container}>
      <CircleUi size={200} position="top-left" />
      <CircleUi size={100} position="top-right" />
      <CircleUi size={100} position="bottom-left" />
      <CircleUi size={200} position="bottom-right" />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>{heading}</Text>
        <Text style={styles.subtitle}>{subHeading}</Text>
      </View>
      {children}
    </View>
  );
};

export default React.memo(AuthFormContainer);
