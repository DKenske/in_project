/* eslint-disable consistent-return */
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { AiOutlineUser } from 'react-icons/ai';
import { device } from '../../devices';

const ICONUSERSETTINGS = `
  margin-right: 10px;
  font-size: 1em;
`;

export const Header = styled.div`
  display: flex;
  background-color: #f54438;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 1001;
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const ResponsiveMenu = styled.div`
  overflow: hidden;
  transition: max-height 0.2s ease, padding 0.2s ease;
  z-index: 1000000000000000000;

  @media ${device.tablet} {
    max-height: 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const UserContainer = styled(Grid)`
  height: 60px;
  width: 100px;
  color: white;
  dispĺay: flex;
  justify-content: space-between;
`;

export const UserInfo = styled(Grid)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  z-index: 1001;
`;
export const Content = styled.div`
  background-color: black;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 0;
  margin: 0;
  height: 100vh;

  @media ${device.mobileL} {
    margin: 70px 5px 0px 5px;
  }
`;

export const IconSingleUser = styled(AiOutlineUser)`
  ${ICONUSERSETTINGS}
  margin: 0 0 0 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserField = styled.div`
  color: white;
  background: #777777;
  width: 200px;
  margin: 5px;
  height: 20px;
`;

export const ModalTitle = styled.p`
  color: white;
  font-size: 30px;
`;
export const CloseModalButton = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background: #f55539;
  }
`;

export const ComicModalHeader = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  height: 5vh;
  background-color: #f54438;
  justify-content: space-between;
  align-items: center;
`;

export const CupomContainer = styled.div`
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  background: #444;
`;
