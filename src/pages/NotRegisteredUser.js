import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation';
import { LoginMutation } from '../container/LoginMutation';
import { Layout } from '../components/Layout';

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <Layout title='Gestionar sesión' subtitle='Debes estar en una sesión activa para acceder a distintas secciones de la página.'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              register({ variables }).then(({ data }) => {
                const { signup } = data;
                activateAuth(signup);
              });
            };

            const errorMsg = error && 'El usuario ya existe o hay algún problema.';
            return <UserForm title='Registrarse' onSubmit={onSubmit} error={errorMsg} disabled={loading} />;
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password };
              const variables = { input };
              login({ variables }).then(({ data }) => {
                const { login } = data;
                activateAuth(login);
              });
            };
            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.';
            return <UserForm title='Iniciar sesión' onSubmit={onSubmit} error={errorMsg} disabled={loading} />;
          }
        }
      </LoginMutation>
    </Layout>
  );
};
