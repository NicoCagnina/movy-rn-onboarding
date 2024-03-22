declare module 'react-native-config' {
  export interface NativeConfig {
    BASE_URL: string;
    IMAGE_URL: string;
    TMDB_API_KEY: string;
    FIREBASE_API_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: string;
    FIREBASE_APP_ID: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
