import Config from 'react-native-config';

export const getImageUrl = (path: string) => {
  return Config.IMAGE_URL + path;
};
