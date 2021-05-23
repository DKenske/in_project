/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import Button from '../../components/button/index';
import ModalComponent from '../../components/modal';
import InputComponent from '../../components/input';
import TitleComponent from '../../components/title';

export const ModalDeleteBook = ({ open, closeModal }) => {
  return (
    <>
      <ModalComponent
        modalState={open}
        onBackdropClick={closeModal}
        style={{
          alignItems: 'center',
        }}
      >
        <>
          <TitleComponent text="Deletar Conteúdo" style={{ margin: '20px' }} />
          <Grid
            justify="flex-start"
            alignItems="center"
            style={{ marginTop: '30px' }}
            container
          >
            <Autocomplete
              loadingText="Carregando..."
              options={[
                'Maryland 1',
                'Maryland 2',
                'Maryland 3',
                'Maryland 4',
                'Maryland 5',
              ]}
              getOptionLabel={(option) => option}
              style={{
                width: '100%',
                marginBottom: '10px',
                marginRight: '10px',
              }}
              renderInput={(params) => (
                <TextField {...params} label="Modulo" variant="outlined" />
              )}
            />
          </Grid>
          <Grid
            justify="space-between"
            alignItems="center"
            style={{ marginTop: '30px' }}
            container
          >
            <Button
              label="Deletar conteúdo"
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
