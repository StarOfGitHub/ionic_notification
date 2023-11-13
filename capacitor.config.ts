import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'mobile-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
