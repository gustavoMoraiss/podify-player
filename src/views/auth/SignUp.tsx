import React, {FC} from 'react';
import {View, StyleSheet, Text, SafeAreaView, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from 'src/utils/colors';

interface Props {}

const SignUp: FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
});

export default React.memo(SignUp);
