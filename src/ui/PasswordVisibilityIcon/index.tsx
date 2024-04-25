import React, {FC} from 'react';
import colors from 'src/utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  privateIcon?: boolean;
}

const PasswordVisibilityIcon: FC<Props> = props => {
  const {privateIcon} = props;

  return privateIcon ? (
    <Icon name="eye-outline" color={colors.SECONDARY} size={16}></Icon>
  ) : (
    <Icon name="eye-off-outline" color={colors.SECONDARY} size={16}></Icon>
  );
};

export default React.memo(PasswordVisibilityIcon);
