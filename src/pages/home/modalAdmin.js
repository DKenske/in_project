/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Button from '../../components/button/index';
import ModalComponent from '../../components/modal';
import { ModalUploadArchive } from './ModalUploadArchive';
import { ModalDeleteBook } from './ModalDeleteBook';
import { ModalUpdateBook } from './ModalUpdateBook';

export const ModalAdmin = ({ open, closeModal }) => {
  const [openUpArchive, setOpenUpArchive] = useState(false);
  const [openDelArchive, setOpenDelArchive] = useState(false);
  const [openUpdateArchive, setOpenUpdateArchive] = useState(false);

  const handleCloseUpArchive = () => {
    setOpenUpArchive(false);
  };

  const handleCloseDelArchive = () => {
    setOpenDelArchive(false);
  };

  const handleCloseUpdateArchive = () => {
    setOpenUpdateArchive(false);
  };

  return (
    <>
      <ModalComponent modalState={open} onBackdropClick={closeModal} fullWidth>
        <>
          <Grid justify="center" alignItems="center" container>
            <Button
              label="Subir conteúdo"
              variant="primary"
              margin="10px 0 10px 5px"
              type="submit"
              width="100%"
              onClick={() => setOpenUpArchive(true)}
            />
          </Grid>
          <Grid justify="center" alignItems="center" container>
            <Button
              label="Deletar conteúdo"
              variant="primary"
              margin="10px 0 10px 5px"
              type="submit"
              width="100%"
              onClick={() => setOpenDelArchive(true)}
            />
          </Grid>
          <Grid justify="center" alignItems="center" container>
            <Button
              label="Modificar conteúdo"
              variant="primary"
              margin="10px 0 10px 5px"
              type="submit"
              width="100%"
              onClick={() => setOpenUpdateArchive(true)}
            />
          </Grid>
          <Grid justify="center" alignItems="center" container>
            <Button
              label="Sair"
              variant="danger"
              margin="10px 0 10px 5px"
              type="submit"
              width="100%"
              onClick={closeModal}
            />
          </Grid>
        </>
      </ModalComponent>
      <ModalUploadArchive
        open={openUpArchive}
        closeModal={handleCloseUpArchive}
      />
      <ModalDeleteBook
        open={openDelArchive}
        closeModal={handleCloseDelArchive}
      />
      <ModalUpdateBook
        open={openUpdateArchive}
        closeModal={handleCloseUpdateArchive}
      />
    </>
  );
};
