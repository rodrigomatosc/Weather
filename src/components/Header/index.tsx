import React from 'react';
import {
  Container,
  ContainerLocal,
  TextDay,
  TextLocal,
  TextLocalFirst,
} from './styles';

interface HeaderProps {
  textDay: string;
  textLocal: string;
}

const Header: React.FC<HeaderProps> = ({textDay, textLocal}) => {
  return (
    <Container>
      <TextDay>{textDay}</TextDay>
      <ContainerLocal>
        <TextLocalFirst>Agora em </TextLocalFirst>
        <TextLocal>{textLocal}</TextLocal>
      </ContainerLocal>
    </Container>
  );
};

export default Header;
