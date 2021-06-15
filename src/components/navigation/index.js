/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
import React, { useState, useMemo } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import {
  Header,
  Content,
  IconSingleUser,
  UserContainer,
  UserInfo,
} from './styles';
import { ModalUser } from './modalUser';
import history from '../../services/history';
import DrawerMenu from './SideDrawer';
import Button from '../button/index';

const NavigationComponent = ({ children }) => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleCloseUserModal = () => {
    setUserModalOpen(false);
  };

  const redirect = (e, route) => {
    e.stopPropagation();
    history.push(route);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        redirect(event, '/');
        break;
      case 1:
        redirect(event, '/store');
        break;
      case 2:
        redirect(event, '/cart');
        break;

      default:
    }
  };

  useMemo(() => {
    window.location.pathname === '/' && setValue(0);
    window.location.pathname === '/store' && setValue(1);
    window.location.pathname === '/cart' && setValue(2);
  }, [window.location.pathname]);

  return (
    <>
      <Header>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="colection" style={{ fontSize: '30px' }} />
          <Tab label="store" style={{ fontSize: '30px' }} />
          <Tab label="cart" style={{ fontSize: '30px' }} />
        </Tabs>
        {window.location.pathname === '/store' && (
          <Button
            variant="search"
            style={{
              width: '50px',
              marginRight: '-60vw',
              marginTop: '0',
            }}
            label="Search!"
            onClick={() => setDrawerOpen(true)}
          />
        )}
        <UserContainer onClick={() => setUserModalOpen(true)}>
          <UserInfo
            style={{
              marginTop: '8px',
            }}
          >
            Perfil
            <IconSingleUser
              style={{
                fontSize: '45px',
                color: '#eeeeee',
                marginRight: '-10px',
              }}
            />
          </UserInfo>
        </UserContainer>
      </Header>
      <Content>{children}</Content>
      <DrawerMenu open={drawerOpen} handleClose={handleCloseDrawer} />
      {userModalOpen && (
        <ModalUser open={userModalOpen} closeModal={handleCloseUserModal} />
      )}
    </>
  );
};

export default NavigationComponent;
