import styled from 'styled-components';

export const PasswordIsValid = styled.div`
  position: relative;
  & > span {
    position: absolute;
    top: 0;
    color: red;
    font-size: 0.8em;
  }
`;
