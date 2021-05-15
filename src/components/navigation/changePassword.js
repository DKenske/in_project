import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import PasswordValidation from '../passwordValidation/index';
import { signOut } from '../../store/modules/auth/actions';
import ModalUser from '../modal/index';
import Button from '../button/index';
import Input from '../input/index';
import api from '../../services/api';

const PASSWORD_INITIAL_STATE = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
};

const ModalChangePassword = ({ open, handlePasswordModal }) => {
  const [password, setPassword] = useState(PASSWORD_INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [isInvalid, setIsInvalid] = useState(false);

  const handlePassword = (event, key) => {
    setPassword((state) => ({
      ...state,
      [key]: event.target.value,
    }));
  };

  const handleIsInvalid = (value) => {
    setIsInvalid(value);
  };

  const onHandleSubmit = async (event) => {
    event.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = password;
    const lang = window.localStorage.i18nextLng;
    setLoading(true);

    try {
      await api.patch(
        '/auth/changepassword',
        {
          old_password: currentPassword,
          new_password: newPassword,
          confirm_password: confirmPassword,
        },
        {
          headers: {
            token,
            lang,
          },
        }
      );

      dispatch(signOut());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPassword(PASSWORD_INITIAL_STATE);
    setIsInvalid(false);
  }, []);

  return (
    <ModalUser
      modalState={open}
      onBackdropClick={handlePasswordModal}
      onClose={() => {
        setPassword(PASSWORD_INITIAL_STATE);
      }}
      title={t('userSettings.password.modalTitle')}
      maxWidth="xs"
      fullScreenMobile
    >
      <form
        onSubmit={(e) => onHandleSubmit(e)}
        style={{ boxSizing: 'border-box' }}
      >
        <Input
          label={t('userSettings.password.current')}
          marginBottom={15}
          type="password"
          name="currentPassword"
          onChange={(e) => handlePassword(e, 'currentPassword')}
          disabled={loading}
        />
        <Input
          label={t('userSettings.password.new')}
          marginBottom={15}
          type="password"
          name="newPassword"
          onChange={(e) => handlePassword(e, 'newPassword')}
          disabled={loading}
          isInvalid={isInvalid}
        />
        <Input
          label={t('userSettings.password.confirmation')}
          type="password"
          name="confirmPassword"
          onChange={(e) => handlePassword(e, 'confirmPassword')}
          disabled={loading}
          isInvalid={isInvalid}
          marginBottom={1}
        />
        <PasswordValidation
          newPassword={password.newPassword}
          confirmPassword={password.confirmPassword}
          invalid={handleIsInvalid}
        />
        <Grid justify="flex-end" container>
          <Button
            label={t('buttons.confirm')}
            variant="primary"
            margin="20px 0%"
            type="submit"
            disabled={loading}
          />
        </Grid>
      </form>
    </ModalUser>
  );
};

export default ModalChangePassword;
