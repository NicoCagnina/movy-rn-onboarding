declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL: string;
    IMAGE_URL: string;
    TMDB_API_KEY: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
