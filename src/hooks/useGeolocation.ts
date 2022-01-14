import {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {GeolocationType} from '../types';

export const useGeolocation = (
  hasLocationPermission: boolean,
): GeolocationType => {
  const [geolocation, setGeolocation] = useState<GeolocationType>(null);

  useEffect(() => {
    hasLocationPermission &&
      Geolocation.getCurrentPosition(
        position => {
          setGeolocation(position);
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
  }, [hasLocationPermission]);

  return geolocation;
};
