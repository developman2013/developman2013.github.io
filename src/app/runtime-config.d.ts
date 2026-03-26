type FirebaseRuntimeConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

type AppRuntimeConfig = {
  firebase?: FirebaseRuntimeConfig;
};

interface Window {
  __APP_CONFIG__?: AppRuntimeConfig;
}
