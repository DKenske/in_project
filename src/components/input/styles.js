import styled from 'styled-components';
import { IoIosEyeOff, IoIosEye } from 'react-icons/io';
import { device } from '../../devices';

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  color: ${({ error }) => error && 'red'};
  justify-content: center;
`;

export const Input = styled.input`
  width: 100%;
  background-color: #fff;
  min-height: 48px;
  border-radius: 6px;
  padding: 0 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #cfd8e3;
  position: relative;
  transition: all 0.5s ease-out;
  ${({ marginBottom }) =>
    marginBottom &&
    `
  margin-bottom: ${marginBottom}px;
  @media ${device.mobileL} {
    margin-bottom: ${marginBottom + 10}px;
  }
  `}
  ${({ isInvalid }) => isInvalid && 'border-color: red;'}
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #dddddd;
    cursor:default;
    border: none;
  `};

  ::placeholder {
    color: ${({ editing }) => editing && 'black;'};
  }
`;

export const ShowPasswordContainer = styled.span`
  position: absolute;
  bottom: 50%;
  right: 10%;
`;

export const IconShowPassword = styled(IoIosEye)`
  font-size: 1.2rem;
`;

export const IconHidePassword = styled(IoIosEyeOff)`
  font-size: 1.2rem;
`;
