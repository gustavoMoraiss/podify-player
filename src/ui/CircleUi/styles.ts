import {StyleSheet} from 'react-native';
import colors from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  secondContainer: {
    backgroundColor: colors.SECONDARY,
    opacity: 0.3,
  },
  centerView: {
    backgroundColor: colors.SECONDARY,
    opacity: 0.3,
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default styles;
