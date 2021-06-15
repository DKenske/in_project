import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const WarningMessage = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  color: red;
`;

export const Body = styled.div`
  background-color: #fff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  width: 390px;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
