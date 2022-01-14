import React from 'react';

import {Container, Text} from './styles';

interface ButtonProps {
  text: string;
  onPress: Function;
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
