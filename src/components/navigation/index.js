/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import imagem from '../../assets/images/INOVASIE-LOGO-1-Branca.png';
import {
  Header,
  Content,
  IconSingleUser,
  UserContainer,
  UserInfo,
  imageSrc,
} from './styles';
import { ModalUser } from './modalUser';

const NavigationComponent = ({ children }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [checked, setChecked] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const handleCloseUserModal = () => {
    setUserModalOpen(false);
  };

  return (
    <>
      <Header mobileMenuIsOpen={openMobile} userSettingsIsOpen={openSettings}>
        <imageSrc>
          <img
            src={imagem}
            style={{
              width: '100px',
              color: 'black',
              marginTop: '12px',
              marginLeft: '10px',
            }}
          />
        </imageSrc>
        <UserContainer onClick={() => setUserModalOpen(true)}>
          <UserInfo
            style={{
              color: '#eeeeee',
              marginRight: '30px',
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
      <Content mobileMenuIsOpen={checked}>{children}</Content>
      {userModalOpen && (
        <ModalUser open={userModalOpen} closeModal={handleCloseUserModal} />
      )}
    </>
  );
};

export default NavigationComponent;
