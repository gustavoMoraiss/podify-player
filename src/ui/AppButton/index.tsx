import React, {FC} from 'react';
import styles from './styles';
import {Pressable, Text} from 'react-native';
import colors from 'src/utils/colors';

interface Props {
  title: string;
  onPress?: void;
}

const AppButton: FC<Props> = props => {
  const {title, onPress} = props;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(AppButton);
