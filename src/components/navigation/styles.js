/* eslint-disable consistent-return */
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardData } from 'react-icons/bs';
import { VscGraph } from 'react-icons/vsc';
import { ImUserTie } from 'react-icons/im';
import { FaUserNurse, FaRoute, FaBars } from 'react-icons/fa';
import { RiMapPinUserLine, RiUser5Line } from 'react-icons/ri';
import { IoLocationSharp } from 'react-icons/io5';
import { GoTerminal, GoGraph } from 'react-icons/go';
import { AiOutlineLine, AiOutlineUser } from 'react-icons/ai';
import { GiReceiveMoney, GiMeepleGroup } from 'react-icons/gi';
import { BiExit, BiLock } from 'react-icons/bi';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { device } from '../../devices';

const ICON = `
  color: inherit;
  font-size: 20px;
  margin-right: 10px;
`;

const ICONSECOND = `
  color: inherit;
  font-size: 13px;
  margin-right: 20px;
`;

const ICONUSERSETTINGS = `
  margin-right: 10px;
  font-size: 1em;
`;
export const imageSrc = styled.div`
  width: 90px;
`;
export const Header = styled.div`
  display: flex;
  background-color: #f54438;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  height: 75px;
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

export const Menu = styled.div`
  background-color: #f6e547;
  position: fixed;
  box-shadow: -2px 0 10px -2px #999;
  overflow: auto;
  top: 0;
  bottom: 0;
  left: 0;
  width: 266px;
  padding-top: 70px;
  z-index: 9999;
  margin-top: 0;

  // @media ${device.tablet} {
  //   bottom: unset;
  //   padding-top: 0;
  //   width: 100%;
  // }

  @media ${device.mobileL} {
    margin-top: 60px;

    ${({ menuOpened }) =>
      menuOpened &&
      `
      background-color: #fff;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-top: 70px;
      z-index: 1000;
    `}
  }
`;

export const MobileMenu = styled.div`
  margin: 20px;

  ${(props) =>
    props.menuActive &&
    `
    margin-left: 270px;
    `}

  @media ${device.mobileL} {
    display: flex;
    margin-left: 0;
  }
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

    ${({ mobileMenuIsOpen }) =>
      mobileMenuIsOpen &&
      `
      padding: 50px 0;
      max-height: 100vh;
      overflow: auto;
    `}
  }

  @media ${device.mobileL} {
    ${({ mobileMenuIsOpen }) =>
      mobileMenuIsOpen &&
      `
     
      padding: 50px 0;
        width: 100%;
    `}
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

export const UserSettings = styled(Grid)`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Settings = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 22px;
  width: 234px;
  border: 1px solid #dcdcdc;
  box-shadow: 0px 5px 10px 0px rgba(183, 192, 206, 0.2);
  padding: 20px;
  z-index: 1000;
  top: 100%;
  background-color: white;
  color: black;
  @media ${device.tablet} {
    right: 0;
    border-top: none;
    width: 254px;
  }
  @media ${device.mobileL} {
    width: 100%;
    right: 0;
    border-top: none;
    padding-bottom: 40px;
  }
`;

export const SettingsName = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;

export const LastLogin = styled.div`
  font-size: 12px;
  color: #686868;
  text-align: center;
`;

export const BodyContent = styled.div`
  width: 100%;
  height: 80%;
  margin-top: -90vh;
  margin-bottom: 0;
  z-index: 9999999;

  @media ${device.tablet} {
    margin-top: -100vh;
  }
  @media ${device.mobileL} {
    margin-top: -100vh;
  }

  @media (max-width: 800px) {
    margin-top: -90vh;
  }
`;

export const LastLoginText = styled.p`
  margin: 5px 0;
`;

export const SettingsOptions = styled.div`
  padding: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #367ec6;
  }

  ${({ margin }) => margin && 'margin-top: 14px;'}
  ${({ unclickable }) =>
    unclickable &&
    `
    cursor: default;
    &:hover {
      color: black;
    }
  `}
`;

export const CountryFlag = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const Content = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 0;
  margin: 0;
  height: 100vh;
  ${({ mobileMenuIsOpen }) =>
    mobileMenuIsOpen &&
    `
      margin: 70px 5px 0px 270px;
    `}

  @media ${device.mobileL} {
    margin: 70px 5px 0px 5px;
  }
`;

export const OptionMenu = styled.div`
  padding: 20px 30px;
  color: #000;
  cursor: pointer;
  flex-direction: column;
`;

export const SubOptionMenu = styled.div`
  padding: 10px 10px;
  color: #009792;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #e2e8f01c;
    color: #009999;
  }

  background-color: ${(props) => (props.active ? '#e2e8f06c' : '#fff')};
`;

export const PasswordIsValid = styled.div`
  position: relative;
  & > span {
    position: absolute;
    top: 0;
    color: red;
    font-size: 0.8em;
  }
`;

export const Text = styled.span`
  color: inherit;
  font-size: 18px;
`;

export const SubText = styled.span`
  color: inherit;
  font-size: 13px;
`;

export const IconBackMenu = styled(ArrowBack)`
  ${ICON}
  display: inline !important;
  cursor: pointer;

  ${(props) =>
    !props.menuActive &&
    `
      display: none !important;
    `}
  @media ${device.mobileL} {
    display: none !important;
  }
`;

export const IconUsers = styled(FiUsers)`
  ${ICON}
`;

export const IconData = styled(BsClipboardData)`
  ${ICON}
`;

export const IconReport = styled(VscGraph)`
  ${ICON}
`;

export const IconMaster = styled(ImUserTie)`
  ${ICONSECOND}
`;

export const IconOperador = styled(FaUserNurse)`
  ${ICONSECOND}
`;

export const IconDistri = styled(RiMapPinUserLine)`
  ${ICONSECOND}
`;

export const IconRoute = styled(FaRoute)`
  ${ICONSECOND}
`;

export const IconPoint = styled(IoLocationSharp)`
  ${ICONSECOND}
`;

export const IconSeller = styled(RiUser5Line)`
  ${ICONSECOND}
`;

export const IconTerminal = styled(GoTerminal)`
  ${ICONSECOND}
`;

export const IconLine = styled(AiOutlineLine)`
  ${ICONSECOND}
`;

export const IconPick = styled(GiReceiveMoney)`
  ${ICONSECOND}
`;

export const IconSort = styled(GiMeepleGroup)`
  ${ICONSECOND}
`;

export const IconGraphic = styled(GoGraph)`
  ${ICONSECOND}
`;

export const IconSingleUser = styled(AiOutlineUser)`
  ${ICONUSERSETTINGS}
  margin: 0 0 0 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconBiExit = styled(BiExit)`
  ${ICONUSERSETTINGS}
`;

export const IconBiLock = styled(BiLock)`
  ${ICONUSERSETTINGS}
`;

export const IconHamburgerMenu = styled(FaBars)`
  ${ICON}
  display: none;
  cursor: pointer;

  @media ${device.desktopL} {
    ${(props) =>
      !props.menuActive &&
      `
      display: inline;
    `}
  }

  @media ${device.mobileL} {
    display: inline;
  }
`;
