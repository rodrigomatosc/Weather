import React from 'react';
import {helperIconWeather} from './helper';
import {
  Container,
  ContainerText,
  ImageWeather,
  Text,
  TextCelsius,
} from './styles';

interface TemperatureProps {
  temperature: string;
  iconId: string;
}

const Temperature: React.FC<TemperatureProps> = ({temperature, iconId}) => {
  return (
    <Container>
      <ContainerText>
        <Text>{temperature}</Text>
        <TextCelsius>°c</TextCelsius>
      </ContainerText>
      <ImageWeather resizeMode="contain" source={helperIconWeather(iconId)} />
    </Container>
  );
};

export default Temperature;
