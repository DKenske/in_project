import styled from 'styled-components';
import { device } from '../../devices';

export const Button = styled.button`
  min-height: 48px;
  cursor: pointer;
  padding: 0 16px;
  border-radius: 4px;
  min-width: 64px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.5s ease-out;
  width: ${(props) => (props.width ? props.width : null)};
  margin: ${(props) => (props.margin ? props.margin : '0')};

  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: #6875f5;
    color: #fff;
    border: 1px solid  #6875f5;
  `}

  ${({ variant }) =>
    variant === 'info' &&
    `
    background-color: #374151;
    color: #fff;
    border: 1px solid  #374151;
  `}

  ${({ variant }) =>
    variant === 'danger' &&
    `
    background-color: #c81e1e;
    color: #fff;
    border: 1px solid  #c81e1e;
  `}

  ${({ variant }) =>
    variant === 'tertiary' &&
    `
    background-color: #c9cbce;
    color: black;
    border: 0px;
  `}
  
  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: #046c4e;
    color: #fff;
    border: 1px solid  #046c4e;
  `}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #dddddd;
    cursor: default;
    border: none;
  `}

  ${({ fullWidthMobile }) =>
    fullWidthMobile &&
    `
  @media ${device.mobileL} {
    width: 100%;
  }
  `}
`;
