import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  { AuthStackLogin } from './AuthStackLogin.router';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStackLogin />
    </NavigationContainer>
  );
}
