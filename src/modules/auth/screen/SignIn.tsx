import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Button from 'shared/components/Button';
import { Flex, HStack, VStack } from 'react-native-flex-layout';
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'shared/components/TextInput';
import SocialLoginButton from '../components/SocialLoginButton';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

interface LoginForm {
  email: string;
  password: string;
}
interface SignInProps {
  navigation: NavigationProp<any>;
}

export const SignIn: React.FC<SignInProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({ mode: 'onChange' });

  const onSubmit = (data: LoginForm) => {
    console.log('Login pressed with email:', data.email, 'and password:', data.password);
  };

  const handleSignUpPress = () => {
    navigation.navigate('signup');
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={Platform.OS === 'ios'}
        style={{ flex: 1 }}
      >
        <VStack bg='white' fill center>
          <Flex mt={20}>
            <HStack p={24}>
              <Text style={{ fontSize: 24 }}>Login</Text>
            </HStack>
          </Flex>
          <Flex w={'100%'} ph={24}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View>
                  <Input
                    keyboardType='email-address'
                    placeholder='E-mail'
                    autoCapitalize='none'
                    onChangeText={(text) => onChange(text.trim())}
                    value={value}
                    aria-label='Campo de e-mail'
                  />
                  <Text style={{ color: 'red' }}>{errors.email?.message}</Text>
                </View>
              )}
              name='email'
              rules={{
                required: 'E-mail is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              }}
              defaultValue=''
            />
          </Flex>
          <Flex w={'100%'} ph={24}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View>
                  <Input
                    secureTextEntry={true}
                    autoCapitalize='none'
                    keyboardType='default'
                    placeholder='Senha'
                    onChangeText={onChange}
                    value={value}
                    aria-label='Campo de senha'
                  />
                  <Text style={{ color: 'red' }}>{errors.password?.message}</Text>
                </View>
              )}
              name='password'
              rules={{
                required: 'Password is required',
                minLength: { value: 4, message: 'Password must have at least 4 characters' },
              }}
              defaultValue=''
            />
          </Flex>

          <Flex w={'100%'} p={24}>
            <Button onPress={handleSubmit(onSubmit)} title='Login' variant='contained' disabled={!isValid} />
          </Flex>
          <Flex>
            <HStack>
              <SocialLoginButton onPress={() => {}} icon={<AntDesign name='google' size={30} color='black' />} />
              <SocialLoginButton onPress={() => {}} icon={<FontAwesome name='facebook-f' size={30} color='black' />} />
              <SocialLoginButton onPress={() => {}} icon={<AntDesign name='apple1' size={30} color='black' />} />
            </HStack>
          </Flex>
          <Flex mt={12}>
            <HStack>
              <Text>Não tem uma conta? </Text>
              <TouchableOpacity onPress={handleSignUpPress}>
                <Text style={{ color: 'black', fontWeight: '600' }}>Cadastre-se</Text>
              </TouchableOpacity>
            </HStack>
          </Flex>
        </VStack>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
