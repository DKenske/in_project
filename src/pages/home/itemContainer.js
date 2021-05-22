/* eslint-disable react/no-unescaped-entities */
import React, { useMemo, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Switch, TextField, Grid } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import Button from '../../components/button';
import InputComponent from '../../components/input';
import avatarMen from '../../assets/images/avatarmen.png';

import {
  ActionButton,
  IconMeeting,
  BodyItemContainer,
  IconUserNotSelected,
} from './styles';
import ModalComponent from '../../components/modal';

const INITIAL_QUERY = {
  nome: null,
  sexo: null,
  turma: null,
  ativo: 1,
  idade: null,
};

export const ItemContainer = ({
  selecao,
  getAlunos,
  userSelected,
  cleanItemSelected,
  handleOpenDelete,
}) => {
  const [turmas, setTurmas] = useState([]);
  const [user, setUser] = useState([]);
  const [query, setQuery] = useState(INITIAL_QUERY);
  const [modalSuccessOpens, setModalSuccessOpens] = useState(false);

  const getTurmasToAuto = async () => {
    const result = await axios.get('http://localhost:8010/turma', {});
    console.log(result);
    if (result.data.rows) {
      setTurmas(result.data.rows);
    }
    console.log(turmas);
  };

  useMemo(() => {
    getTurmasToAuto();
  }, []);

  const handleUpdateUser = async () => {
    const queryParams = {};

    if (query.nome && query.turma && query.idade) {
      queryParams.ativo = query.ativo;

      if (query.sexo) {
        queryParams.sexo = query.sexo;
      }
      if (query.sexo) {
        queryParams.nome = query.nome;
      }
      if (query.sexo) {
        queryParams.turma = query.turma;
      }

      const result = await axios.put(
        `http://localhost:8010/aluno/update/${userSelected.id}`,
        queryParams
      );

      if (result.status === 200 || result.status === 204) {
        setModalSuccessOpens(true);
      }
    }
  };

  return (
    <BodyItemContainer>
      {userSelected && selecao === 'Aluno' ? (
        <>
          {console.log(userSelected)}
          <Avatar
            src={avatarMen}
            style={{
              height: '100%',
              width: '100%',
              gridColumn: '1/1',
              gridRow: '1/4',
            }}
          />
          <div
            style={{
              height: '10%',
              width: '80%',
              fontSize: '16px',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          >
            Nome
            <InputComponent
              placeholder={userSelected.nome}
              onChange={(ev, i) => {
                setQuery((state) => ({ ...state, nome: ev.target.value }));
              }}
            />
          </div>
          <div
            style={{
              height: '10%',
              width: '80%',
              fontSize: '16px',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          >
            Sexo
            <Autocomplete
              id="combo-box-demo"
              disabled={!userSelected}
              options={['masculino', 'feminino', 'outro']}
              getOptionLabel={(option) => option}
              onChange={(e, target) => {
                setQuery((state) => ({ ...state, sexo: target }));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder={userSelected.sexo}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    height: '10%',
                    border: '0',
                    color: 'black',
                  }}
                />
              )}
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                height: '10%',
                border: '0',
              }}
            />
          </div>
          <div
            style={{
              height: '10%',
              width: '80%',
              fontSize: '16px',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          >
            idade
            <InputComponent
              placeholder={userSelected.idade}
              type="number"
              disabled={!userSelected}
              onChange={(ev, i) => {
                setQuery((state) => ({ ...state, idade: ev.target.value }));
              }}
            />
          </div>
          <div
            style={{
              height: '10%',
              width: '80%',
              fontSize: '16px',
              alignSelf: 'center',
              justifySelf: 'center',
            }}
          >
            Turma
            <Autocomplete
              id="combo-box-demo"
              disabled={!userSelected}
              options={turmas}
              getOptionLabel={(option) => option.nome}
              onChange={(e, target) => {
                setQuery((state) => ({ ...state, turma: target.nome }));
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder={userSelected.turma}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    height: '10%',
                    border: '0',
                  }}
                />
              )}
              style={{
                backgroundColor: 'white',
                borderRadius: '5px',
                height: '10%',
                border: '0',
              }}
            />
          </div>

          <div
            style={{
              alignSelf: 'center',
              justifySelf: 'flex-end',
              marginRight: '20px',
              gridColumn: '3/3',
              gridRow: '4/4',
            }}
          >
            Ativo:
            <Switch
              checked={userSelected.ativo === 1}
              label="ativo:"
              disabled={!userSelected}
              style={{
                alignSelf: 'center',
                justifySelf: 'center',
              }}
            />
          </div>
          <ActionButton
            color="#DB4B25"
            onClick={() => handleOpenDelete()}
            style={{
              gridColumn: '1/1',
              gridRow: '5/5',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Deletar Aluno
          </ActionButton>
          <ActionButton
            color="#02A1F7"
            onClick={() => handleUpdateUser()}
            posit={4}
            style={{
              gridColumn: '1/1',
              gridRow: '4/4',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Editar Aluno
          </ActionButton>
        </>
      ) : (
        <>
          <IconUserNotSelected />
          <div
            style={{ gridColumn: '2/2', gridRow: '3/3', textAlign: 'center' }}
          >
            Clique no botão "Alunos' a cima e selecione um aluno na tabela ao
            lado direito para atualizar seus dados ou deleta-lo
          </div>
        </>
      )}
      <ModalComponent modalState={modalSuccessOpens}>
        <h3>Usuário alterado com sucesso!</h3>
        <Grid justify="center" alignItems="center" container>
          <Button
            label="Ok!"
            variant="primary"
            margin="10px 0 10px 5px"
            type="submit"
            width="87px"
            onClick={(e) => {
              setModalSuccessOpens(false);
              cleanItemSelected();
              getAlunos();
            }}
          />
        </Grid>
      </ModalComponent>
    </BodyItemContainer>
  );
};
