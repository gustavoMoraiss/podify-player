import {StyleSheet} from 'react-native';
import colors from 'src/utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.SECONDARY,
    paddingVertical: 5,
  },
  subtitle: {
    fontSize: 16,
    color: colors.CONTRAST,
  },
  logoContainer: {
    width: '100%',
    marginBottom: 20,
  },
});

export default styles;
