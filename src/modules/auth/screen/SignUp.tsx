import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Button from 'shared/components/Button';

import { Flex, HStack, VStack } from 'react-native-flex-layout';
import { Input } from 'shared/components/TextInput';
import { ColorsApp } from 'shared/colors';

interface FormData {
  name: string;
  username: string;
  email: string;
}

export const SignUp: React.FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('Form data:', data);
  };

  return (
    <VStack fill>
      <Flex p={24} center>
        <HStack mt={24} center>
          <Text style={{ fontSize: 24, fontWeight: '600' }}>Cadastro</Text>
        </HStack>
      </Flex>
      <Flex center>
        <HStack center p={24}>
          <Text style={{ fontSize: 16, fontWeight: '400' }}>Faça seu cadastro aqui!</Text>
        </HStack>
      </Flex>

      <Flex>
        <VStack ph={24}>
          <Controller
            control={control}
            render={({ field }) => (
              <>
                <Input
                  onChangeText={(text) => {
                    setValue('name', text);
                    field.onChange(text);
                  }}
                  label='Name:'
                  placeholder='Name'
                  value={field.value}
                />
                <Text style={{ color: ColorsApp.red9 }}>{errors.name?.message}</Text>
              </>
            )}
            name='name'
            defaultValue=''
            rules={{
              required: 'Nome é obrigatório',
              pattern: {
                value: /^[a-zA-Z\s]+$/,
                message: 'Formato de nome inválido aceita apenas letras e espaços',
              },
            }}
          />
        </VStack>
        <VStack ph={24}>
          <Controller
            control={control}
            render={({ field }) => (
              <>
                <Input
                  onChangeText={(text) => {
                    setValue('username', text);
                    field.onChange(text);
                  }}
                  label='Username:'
                  placeholder='Username'
                  value={field.value}
                />
                <Text style={{ color: ColorsApp.red9 }}>{errors.username?.message}</Text>
              </>
            )}
            name='username'
            defaultValue=''
            rules={{
              required: 'Username é obrigatório',
              pattern: {
                value: /^[a-zA-Z0-9\s]+$/,
                message: 'Formato de nome inválido aceita apenas letras e espaços',
              },
            }}
          />
        </VStack>
        <VStack ph={24}>
          <Controller
            control={control}
            render={({ field }) => (
              <>
                <Input
                  onChangeText={(text) => {
                    setValue('email', text);
                    field.onChange(text);
                  }}
                  label='E-mail:'
                  placeholder='E-mail'
                  value={field.value}
                />
                <Text style={{ color: ColorsApp.red9 }}>{errors.email?.message}</Text>
              </>
            )}
            name='email'
            defaultValue=''
            rules={{
              required: 'E-mail is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Formato inválido!',
              },
            }}
          />
        </VStack>
      </Flex>
      <Flex p={24}>
        <VStack>
          <Button title='Cadastrar' onPress={handleSubmit(onSubmit)} disabled={!isValid} />
        </VStack>
      </Flex>
    </VStack>
  );
};

export default SignUp;
