type FirebaseRuntimeConfig = {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
};

export function getFirebaseRuntimeConfig(): FirebaseRuntimeConfig | null {
  const runtimeConfig = window.__APP_CONFIG__?.firebase;
  if (!runtimeConfig) {
    return null;
  }

  const requiredKeys: Array<keyof FirebaseRuntimeConfig> = [
    'apiKey',
    'authDomain',
    'projectId',
    'storageBucket',
    'messagingSenderId',
    'appId'
  ];

  const isValid = requiredKeys.every((key) => {
    const value = runtimeConfig[key];
    return typeof value === 'string' && value.length > 0;
  });

  return isValid ? runtimeConfig : null;
}
