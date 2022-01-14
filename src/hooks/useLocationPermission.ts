import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const permission =
  Platform.OS === 'ios'
    ? PERMISSIONS.IOS.LOCATION_ALWAYS
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

export const useLocationPermission = () => {
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    check(permission)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            setHasLocationPermission(false);
            break;
          case RESULTS.DENIED:
            request(permission).then(() => {
              setHasLocationPermission(false);
            });
            break;
          case RESULTS.LIMITED:
            setHasLocationPermission(false);
            break;
          case RESULTS.GRANTED:
            setHasLocationPermission(true);
            break;
          case RESULTS.BLOCKED:
            setHasLocationPermission(false);
            break;
        }
      })
      .catch(() => {
        setHasLocationPermission(false);
      });
  }, []);

  return hasLocationPermission;
};
