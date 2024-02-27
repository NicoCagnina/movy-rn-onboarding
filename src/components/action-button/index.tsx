import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface Props {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
}

const ActionButton = ({icon, text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.iconWithText} onPress={onPress}>
      {icon}
      <Text style={styles.whiteText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
