import React, {FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface Props {
  linkValue: string;
  onPress?(): void;
}

const AppLink: FC<Props> = props => {
  const {linkValue, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.link}>{linkValue}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(AppLink);
