import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const RouteWrapper = ({ component, isProtect, ...rest }) => {
  const isSigned = useSelector((state) => state.auth.signed);
  if (isProtect && !isSigned) return <Redirect to="/login" />;

  if (!isProtect && isSigned) return <Redirect to="/" />;

  return <Route component={component} {...rest} />;
};

export default RouteWrapper;
