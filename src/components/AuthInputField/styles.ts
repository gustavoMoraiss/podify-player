import {StyleSheet} from 'react-native';
import colors from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {},
  label: {
    color: colors.CONTRAST,
  },
  erroMsg: {
    color: colors.ERROR,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default styles;
