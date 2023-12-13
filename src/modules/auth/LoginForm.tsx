import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const LoginForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Lógica de autenticação aqui
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} type='email' />}
        />
      </div>

      <div>
        <label>Password:</label>
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => <input {...field} type='password' />}
        />
      </div>

      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
