import React, { useState, useMemo, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Image } from '@material-ui/icons';
import Input from '../../components/input';
import Button from '../../components/button';
import { Main, Body, WarningMessage } from './styles';
import imagem from '../../assets/images/marvel.png';
import { signInRequest } from '../../store/modules/auth/actions';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const info = useSelector((state) => state.auth);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    dispatch(signInRequest(username, password));
  };
  // <img src="../../assets/images/paybrokers-logo.png" alt="teste" />
  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <Body>
          {' '}
          <img
            src={imagem}
            alt=" "
            style={{
              position: 'relative',
              margin: '0 auto',
              width: '60%',
              marginBottom: '5vh',
              paddingTop: '',
            }}
          />
          {!info.loading && (
            <Grid
              alignContent="center"
              alignItems="center"
              justify="center"
              container
              spacing={4}
            >
              <Grid item xs={8} md={8} lg={8}>
                <Input
                  fullWidth
                  label="username"
                  value={username}
                  type="text"
                  onChange={(ev) => setUsername(ev.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={8} md={8} lg={8}>
                <Input
                  fullWidth
                  label="password"
                  value={password}
                  type="password"
                  onChange={(ev) => setPassword(ev.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={8} md={8} lg={8}>
                <Button
                  label="Login"
                  variant="danger"
                  width="100%"
                  type="submit"
                  style={{ border: 0, color: 'white' }}
                />
              </Grid>
            </Grid>
          )}
          {info.signedFailured && !info.loading && (
            <WarningMessage>Usuário e/ou senha incorretos</WarningMessage>
          )}
        </Body>
      </form>
    </Main>
  );
};

export default Login;
