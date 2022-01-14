import axios from 'axios';
import {WeatherData} from '../types';

export const createRequestApiWeather = async (
  latitude: number,
  longitude: number,
): WeatherData | undefined => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lang=pt_br&lat=${latitude}&lon=${longitude}&appid=5c3fe390947ed56e9c1b2f8843e31777&units=metric`;
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    throw error;
  }
};
