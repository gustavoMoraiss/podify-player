import {FC} from 'react';
import {FlexStyle, View} from 'react-native';
import styles from './styles';
import React = require('react');

interface Props {
  size: number;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const CircleUi: FC<Props> = ({size, position}) => {
  let viewPostion: FlexStyle = {};

  switch (position) {
    case 'top-left':
      viewPostion = {top: -size / 2, left: -size / 2};
      break;
    case 'top-right':
      viewPostion = {top: -size / 2, right: -size / 2};
      break;
    case 'bottom-right':
      viewPostion = {bottom: -size / 2, right: -size / 2};
      break;
    case 'bottom-left':
      viewPostion = {bottom: -size / 2, left: -size / 2};
      break;
  }

  return (
    <View
      style={[styles.container, {...viewPostion, width: size, height: size}]}>
      <View
        style={[
          styles.secondContainer,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
          },
        ]}
      />

      <View
        style={[
          styles.centerView,
          {
            width: size / 1.5,
            height: size / 1.5,
            borderRadius: size / 2,
            transform: [{translateX: -size / 3}, {translateY: -size / 3}],
          },
        ]}
      />
    </View>
  );
};

export default React.memo(CircleUi);
