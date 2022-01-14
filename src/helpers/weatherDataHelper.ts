import {WeatherData, WeatherDataFormatted} from '../types';

export const formatterWeatherData = (
  data: WeatherData,
): WeatherDataFormatted => {
  const date = new Date();
  return {
    local: data.name,
    date: `Hoje, ${date.getDate()}/${date.getMonth() + 1} `,
    temperature: Math.round(data?.main.temp),
    // iconId: data?.weather[0].icon,
    iconId: '01n',
    details: [
      {
        text: data.weather[0].description,
        icon: require('../../assets/images/air.png'),
      },
      {
        text: 'Sensação térmica',
        value: Math.round(data.main.feels_like),
        unity: 'C°',
        icon: require('../../assets/images/air.png'),
      },
      {
        text: 'Temperatura mínima',
        value: Math.round(data.main.temp_min),
        unity: 'C°',
        icon: require('../../assets/images/air.png'),
      },
      {
        text: 'Temperatura máxima',
        value: Math.round(data.main.temp_max),
        unity: 'C°',
        icon: require('../../assets/images/air.png'),
      },
      {
        text: 'Humidade relativa',
        value: data.main.humidity,
        unity: '%',
        icon: require('../../assets/images/air.png'),
      },
      {
        text: 'Pressão',
        value: data.main.pressure,
        unity: 'MBar',
        icon: require('../../assets/images/air.png'),
      },
      ,
    ],
  };
};
