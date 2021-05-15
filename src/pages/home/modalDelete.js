/* eslint-disable eqeqeq */
import React from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import ModalComponent from '../../components/modal';
import Button from '../../components/button';

export const ModalDelete = ({
  open,
  closeModal,
  currentItem,
  selecao,
  requestTable,
  getAlunos,
  getCursos,
  getTurmas,
  cleanItemSelected,
}) => {
  const handleOnSubmit = async (event) => {
    console.log(currentItem);
    const pk = selecao === 'Curso' ? currentItem.nome : currentItem.id;
    event.preventDefault();
    const result = await axios.delete(
      `http://localhost:8010/${selecao.toLowerCase()}/delete/${pk}`,
      {}
    );
    if (result.status == 200) {
      if (selecao === 'Aluno') {
        getAlunos();
      }
      if (selecao === 'Turma') {
        getTurmas();
      }
      if (selecao === 'Curso') {
        getCursos();
      }
      closeModal();
      cleanItemSelected();
    }
  };

  return (
    <ModalComponent modalState={open} onBackdropClick={closeModal}>
      <>
        {`Deseja realmente deletar o(a) ${selecao} ${currentItem.nome}`}?
        <Grid justify="space-between" alignItems="center" container>
          <Button
            label="Cancelar"
            variant="tertiary"
            margin="10px 5px 10px 0"
            type="submit"
            onClick={closeModal}
          />
          <Button
            label="Deletar"
            variant="danger"
            margin="10px 0 10px 5px"
            type="submit"
            width="87px"
            onClick={(e) => handleOnSubmit(e)}
          />
        </Grid>
      </>
    </ModalComponent>
  );
};
