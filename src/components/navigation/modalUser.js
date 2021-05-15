/* eslint-disable eqeqeq */
import React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import ModalComponent from '../modal';
import Button from '../button';
import avatarMen from '../../assets/images/avatarmen.png';

export const ModalUser = ({ open, closeModal }) => {
  return (
    <>
      <ModalComponent modalState={open} onBackdropClick={closeModal}>
        <>
          <Grid justify="center" alignItems="center" container>
            <Avatar
              src={avatarMen}
              style={{
                height: '100%',
                width: '50%',
                gridColumn: '1/1',
                gridRow: '1/4',
                marginTop: '20px',
              }}
            />
          </Grid>
          <Grid justify="center" alignItems="center" container>
            <div
              style={{
                margin: '20px',
                width: '250px',
                height: '35px',
                backgroundColor: '#DDD',
                padding: '7px',
                textAlign: 'center',
                borderRadius: '5px',
              }}
            >
              Usuário: Master
            </div>
            <div
              style={{
                width: '250px',
                height: '35px',
                backgroundColor: '#DDD',
                padding: '7px',
                textAlign: 'center',
                borderRadius: '5px',
                marginBottom: '20px',
              }}
            >
              Cargo: Professor
            </div>
          </Grid>
          <Grid justify="space-between" alignItems="center" container>
            <Button
              label="Editar"
              variant="primary"
              margin="10px 0 10px 5px"
              type="submit"
              width="87px"
            />
            <Button
              label="Sair"
              variant="danger"
              margin="10px 0 10px 5px"
              type="submit"
              width="87px"
              onClick={closeModal}
            />
          </Grid>
        </>
      </ModalComponent>
    </>
  );
};
