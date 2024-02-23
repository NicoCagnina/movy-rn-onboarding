import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface Props {
  icon: React.ReactNode;
  text: string;
}

const ActionButton = (props: Props) => {
  return (
    <TouchableOpacity style={styles.iconWithText} onPress={() => {}}>
      {props.icon}
      <Text style={styles.whiteText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
