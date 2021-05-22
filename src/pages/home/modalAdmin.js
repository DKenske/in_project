/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Button from '../../components/button/index';
import ModalComponent from '../../components/modal';
import { ModalUploadArchive } from './ModalUploadArchive';

export const ModalAdmin = ({ open, closeModal }) => {
  const [openUpArchive, setOpenUpArchive] = useState(false);

  const handleCloseUpArchive = () => {
    setOpenUpArchive(false);
  };
  return (
    <>
      <ModalComponent modalState={open} onBackdropClick={closeModal}>
        <>
          <Grid justify="flex-end" alignItems="center" container>
            <Button
              label="Subir conteúdo"
              variant="primary"
              margin="10px 0 10px 5px"
              type="submit"
              width="87px"
              onClick={() => setOpenUpArchive(true)}
            />
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
      <ModalUploadArchive
        open={openUpArchive}
        closeModal={handleCloseUpArchive}
      />
    </>
  );
};
