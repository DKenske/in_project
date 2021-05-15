import React from 'react';
import ReactLoading from 'react-loading';
import { useTranslation } from 'react-i18next';
import { Body, Text } from './styles';

const LoadingComponent = () => {
  const { t, i18n } = useTranslation();
  return (
    <Body>
      <ReactLoading type="balls" color="#6875f5" />
      <Text>{t('modal.loading')}</Text>
    </Body>
  );
};

export default LoadingComponent;
