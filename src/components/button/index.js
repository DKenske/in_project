import React from 'react';
import { Button } from './styles';

const ButtonComponent = ({
  label,
  type,
  onClick,
  variant,
  width,
  margin,
  disabled,
  fullWidthMobile,
}) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      variant={variant}
      width={width}
      margin={margin}
      disabled={disabled}
      fullWidthMobile={fullWidthMobile}
    >
      {label}
    </Button>
  );
};

export default ButtonComponent;
