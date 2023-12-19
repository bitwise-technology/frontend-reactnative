import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackSignIn } from './AuthSignIn.router';

export function Routes() {
  return (
    <NavigationContainer>
      <AuthStackSignIn />
    </NavigationContainer>
  );
}
