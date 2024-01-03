// LoginStack.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from 'modules/auth/screen/SignIn';
import SignUp from 'modules/auth/screen/SignUp';

export type AuthStackParams = {
  signin: undefined;
  signup: undefined;

};
const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

export const AuthStackSignIn: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name='signin' component={SignIn} />
        <Screen name='signup' component={SignUp} />

      </Navigator>
    </NavigationContainer>
  );
};

export default AuthStackSignIn;
