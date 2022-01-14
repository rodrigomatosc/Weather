import React from 'react';
import Button from '../../components/Button';
import CardWeather from '../../components/CardWeather';
import Header from '../../components/Header';
import Temperature from '../../components/Temperature';
import {WeatherDataFormatted} from '../../types';
import {Container, ContainerButton, List, SafeAreaView} from './styles';

interface HomeViewProps {
  weatherData: WeatherDataFormatted;
  handlerRefetch: Function;
}

const HomeView: React.FC<HomeViewProps> = ({weatherData, handlerRefetch}) => {
  return (
    <Container>
      <SafeAreaView />

      <Header textDay={weatherData.date} textLocal={weatherData.local} />
      <Temperature
        temperature={weatherData.temperature}
        iconId={weatherData.iconId}
      />
      <List
        data={weatherData.details}
        numColumns={2}
        keyExtractor={item => item.text}
        renderItem={({item}) => {
          return (
            <CardWeather
              text={item.text}
              value={item.value}
              unity={item.unity}
              icon={item.icon}
            />
          );
        }}
      />
      <ContainerButton>
        <Button
          text="Atualizar"
          onPress={() => handlerRefetch && handlerRefetch()}
        />
      </ContainerButton>

      <SafeAreaView />
    </Container>
  );
};

export default HomeView;
