import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { I18nManager } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';

// راست‌به‌چپ کردن اپ برای فارسی
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootNavigator />
    </>
  );
}
