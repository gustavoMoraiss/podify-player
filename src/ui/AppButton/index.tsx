import React, {FC} from 'react';
import styles from './styles';
import {TouchableOpacity, Text} from 'react-native';
import colors from 'src/utils/colors';

interface Props {
  title: string;
  onPress?: void;
}

const AppButton: FC<Props> = props => {
  const {title, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(AppButton);
