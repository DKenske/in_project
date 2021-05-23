/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import voltar from '../../assets/images/voltar.png';
import sair from '../../assets/images/sair.png';
import {
  Header,
  Content,
  IconSingleUser,
  UserContainer,
  UserInfo,
  imageSrc,
  BodyContent,
} from './styles';
import { ModalUser } from './modalUser';
import img from '../../assets/images/Novo Projeto.png';
import history from '../../services/history';

const NavigationComponent = ({ children }) => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [checked, setChecked] = useState(false);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const handleCloseUserModal = () => {
    setUserModalOpen(false);
  };
  const redirect = (e, route) => {
    e.stopPropagation();
    history.push(route);
  };

  return (
    <>
      <Header mobileMenuIsOpen={openMobile} userSettingsIsOpen={openSettings}>
        <imageSrc onClick={(e) => redirect(e, '/')}>
          <img
            src={voltar}
            style={{
              width: '100px',
              color: 'black',
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
      <Content mobileMenuIsOpen={checked}>
        <img
          src={img}
          style={{
            width: '100%',
            height: '100%',
            zIndex: '0',
            objectFit: 'cover',
          }}
        />
        <BodyContent>{children}</BodyContent>
      </Content>
      {userModalOpen && (
        <ModalUser open={userModalOpen} closeModal={handleCloseUserModal} />
      )}
    </>
  );
};

export default NavigationComponent;
