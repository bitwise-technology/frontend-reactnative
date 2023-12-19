// LoginStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from 'modules/auth/screen/SignIn';

export type AuthStackPArams = {
  signin: undefined;
};
const { Navigator, Screen } = createStackNavigator<AuthStackPArams>();

export const AuthStackSignIn: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='signin' component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AuthStackSignIn;
