import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Navigation/MainNavigation';
import BootSplash from "react-native-bootsplash";
import { UserProvider } from './Context/UserContext';
export default function App() {
  return (
    <UserProvider>
    <NavigationContainer  onReady={() => {
      BootSplash.hide({ fade: true });
    }}>
      <MainNavigation />
    </NavigationContainer>
    </UserProvider>
  );
}