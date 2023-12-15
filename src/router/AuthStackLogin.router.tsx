// LoginStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from 'modules/auth/screen/Login';
import { NavigationContainer } from '@react-navigation/native';

export type AuthStackPArams = {
  login: undefined;
};
const { Navigator, Screen } = createStackNavigator<AuthStackPArams>();

export const AuthStackLogin: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='login' component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthStackLogin;
