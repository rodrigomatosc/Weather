import React, {useMemo} from 'react';
import {useQuery} from 'react-query';
import {createRequestApiWeather} from '../../api/weather.api';
import {formatterWeatherData} from '../../helpers/weatherDataHelper';
import {WeatherDataFormatted} from '../../types';
import HomeView from './Home.view';
import {useDispatch} from 'react-redux';
import {LOADING} from '../../actions/actionTypes';

interface HomeContainerProps {
  latitude: number;
  longitude: number;
}

const HomeContainer: React.FC<HomeContainerProps> = ({latitude, longitude}) => {
  const dispatch = useDispatch();
  const {data, refetch} = useQuery(
    'requestWeather',
    () => createRequestApiWeather(latitude, longitude),
    {
      onSettled: () => {
        dispatch({type: LOADING, payload: false});
      },
    },
  );

  const weatherData = useMemo<WeatherDataFormatted>(() => {
    if (!data) {
      return {};
    }

    return formatterWeatherData(data);
  }, [data]);

  return (
    <HomeView
      weatherData={weatherData}
      handlerRefetch={() => {
        dispatch({type: LOADING, payload: true});
        setTimeout(() => {
          refetch();
        }, 1000);
      }}
    />
  );
};

export default HomeContainer;
