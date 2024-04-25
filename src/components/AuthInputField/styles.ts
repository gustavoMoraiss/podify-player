import {StyleSheet} from 'react-native';
import colors from 'src/utils/colors';

const styles = StyleSheet.create({
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
  rightIcon: {
    width: 45,
    height: 45,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
  },
});

export default styles;
