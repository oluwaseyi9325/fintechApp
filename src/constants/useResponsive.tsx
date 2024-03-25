import { Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const useResponsive = () => {
  const getWidth = (baseValue: any, scaleFactor = 1) => (windowWidth / 375) * baseValue * scaleFactor;
  const getHeight = (baseValue:any, scaleFactor = 1) => (windowHeight / 667) * baseValue * scaleFactor;

  return {
    WIDTH: getWidth,
    HEIGHT: getHeight,
  };
};

export default useResponsive;
