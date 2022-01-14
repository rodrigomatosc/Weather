import React, {ReactElement} from 'react';

import {Container, ContainerUnity, Icon, Number, Text, Unity} from './styles';

interface CardWeatherProps {
  icon: ReactElement;
  text: string;
  value: number;
  unity: string;
}

const CardWeather: React.FC<CardWeatherProps> = props => {
  const {icon, text, value, unity} = props;
  return (
    <Container>
      {icon && <Icon source={icon} />}
      <Text>{text}</Text>
      <ContainerUnity>
        <Number>{value}</Number>
        <Unity>{unity}</Unity>
      </ContainerUnity>
    </Container>
  );
};

export default CardWeather;
