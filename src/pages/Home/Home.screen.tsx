import React from 'react';
import {GeolocationType} from '../../types';
import HomeContainer from './Home.container';

interface HomeScreenProps {
  geolocation: GeolocationType;
}

const HomeScreen: React.FC<HomeScreenProps> = ({geolocation}) => {
  if (!geolocation) {
    return null;
  }
  return (
    <HomeContainer
      latitude={geolocation.coords.latitude}
      longitude={geolocation.coords.longitude}
    />
  );
};

export default HomeScreen;
