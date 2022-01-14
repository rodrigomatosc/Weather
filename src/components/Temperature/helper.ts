export const helperIconWeather = (iconId: string) => {
  switch (iconId) {
    case '01d':
      return require('../../../assets/images/01d.png');
    case '02d':
      return require('../../../assets/images/02d.png');
    case '03d':
    case '04d':
    case '03n':
    case '04n':
      return require('../../../assets/images/03d.png');
    case '09d':
    case '10d':
    case '11d':
    case '09n':
    case '10n':
    case '11n':
      return require('../../../assets/images/09d.png');
    case '13d':
    case '50d':
    case '13n':
    case '50n':
      return require('../../../assets/images/13d.png');
    case '01n':
      return require('../../../assets/images/01n.png');
    case '02n':
      return require('../../../assets/images/02n.png');

    default:
      return require('../../../assets/images/01d.png');
  }
};
