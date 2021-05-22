import { formatRelative } from 'date-fns';
import React from 'react';
import {
  Label,
  Input,
  IconHidePassword,
  IconShowPassword,
  ShowPasswordContainer,
} from './styles';

const InputComponent = ({
  editing,
  label,
  placeholder,
  name,
  onChange,
  type,
  value,
  required,
  marginBottom,
  disabled,
  isInvalid,
  min,
  max,
  defaultValue,
  isInvalidMsg,
  maxLength,
  style,
}) => {
  return (
    <>
      {label && <Label>{label}:</Label>}
      <Input
        defaultValue={defaultValue}
        editing={editing}
        min={min}
        max={max}
        maxLength={maxLength}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        required={required}
        marginBottom={marginBottom}
        disabled={disabled}
        isInvalid={isInvalid}
        style={style}
      />
      {isInvalid && <Label error>{isInvalidMsg}</Label>}
    </>
  );
};

export default InputComponent;
