import { InsertInvitationOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordIsValid } from './styles';

const PasswordValidation = ({
  newPassword = '',
  confirmPassword = '',
  requiredLength = 6,
  invalid,
}) => {
  const [validLength, setValidLength] = useState(null);
  const [match, setMatch] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (newPassword.length > 0 && newPassword.length < 6) {
      setValidLength(t('userSettings.password.lengthFail'));
      invalid(true);
    } else if (!newPassword.startsWith(confirmPassword)) {
      setMatch(t('userSettings.password.matchFail'));
      invalid(true);
    } else {
      setValidLength('');
      setMatch('');
      invalid(false);
    }
  }, [newPassword, confirmPassword, requiredLength]);

  useEffect(() => {
    setValidLength('');
    setMatch('');
    invalid(false);
  }, []);

  return (
    <PasswordIsValid>
      <span>
        {validLength} {match}
      </span>
    </PasswordIsValid>
  );
};

export default PasswordValidation;
