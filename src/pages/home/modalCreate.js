/* eslint-disable eqeqeq */
import React, { useState, useMemo } from 'react';
import { Grid, Switch, TextField } from '@material-ui/core';
import axios from 'axios';
import { Autocomplete } from '@material-ui/lab';
import ModalComponent from '../../components/modal';
import Button from '../../components/button';
import InputComponent from '../../components/input';

const INITIAL_QUERY = {
  nome: null,
  sexo: null,
  turma: null,
  ativo: 1,
  idade: null,
  curso: null,
  semestre: null,
};

export const ModalCreate = ({
  open,
  closeModal,
  currentItem,
  selecao,
  requestTable,
  getAlunos,
  getCursos,
  getTurmas,
}) => {
  const [turmas, setTurmas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [query, setQuery] = useState(INITIAL_QUERY);
  const handleOnSubmit = async (event) => {
    const queryParams = {};
    if (selecao === 'Aluno') {
      queryParams.nome = query.nome;
      queryParams.sexo = query.sexo;
      queryParams.ativo = query.ativo;
      queryParams.turma = query.turma;
      queryParams.idade = query.idade;
    }

    if (selecao === 'Turma') {
      queryParams.curso = query.curso;
      queryParams.ativo = query.ativo;
    }

    if (selecao === 'Curso') {
      queryParams.nome = query.nome;
      queryParams.ativo = query.ativo;
    }

    event.preventDefault();
    const result = await axios.post(
      `http://localhost:8010/${selecao.toLowerCase()}/add${
        selecao === 'Turma' ? `/${query.semestre}` : ''
      }`,
      queryParams
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
    }
  };

  const getTurmasToAuto = async () => {
    const result = await axios.get('http://localhost:8010/turma', {});
    console.log(result);
    if (result.data.rows) {
      setTurmas(result.data.rows);
    }
    console.log(turmas);
  };

  const getCursosToAuto = async () => {
    const result = await axios.get('http://localhost:8010/curso', {});
    console.log(result);
    if (result.data.rows) {
      setCursos(result.data.rows);
    }
    console.log(turmas);
  };

  useMemo(() => {
    console.log(query);
  }, [query]);

  useMemo(() => {
    getTurmasToAuto();
    getCursosToAuto();
  }, []);

  return (
    <ModalComponent modalState={open} onBackdropClick={closeModal}>
      <>
        <h3>{`Criar ${selecao}`}</h3>
        <Grid justify="center" alignItems="center" container>
          {(selecao === 'Aluno' || selecao === 'Curso') && (
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
                placeholder="Nome"
                onChange={(ev, i) => {
                  setQuery((state) => ({ ...state, nome: ev.target.value }));
                }}
              />
            </div>
          )}
          {selecao === 'Turma' && (
            <>
              <div
                style={{
                  height: '10%',
                  width: '80%',
                  fontSize: '16px',
                  margin: '10px',
                }}
              >
                Cursos
                <Autocomplete
                  id="combo-box-demo"
                  options={cursos}
                  getOptionLabel={(option) => option.nome}
                  onChange={(e, target) => {
                    setQuery((state) => ({ ...state, curso: target.nome }));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="Cursos"
                      style={{
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        height: '100%',
                        width: '100%',
                        border: '0',
                      }}
                    />
                  )}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '5px',
                    height: '100%',
                    width: '100%',
                    border: '0',
                  }}
                />
              </div>

              <div
                style={{
                  height: '10%',
                  width: '80%',
                  fontSize: '16px',
                  margin: '10px',
                }}
              >
                Semestre
                <InputComponent
                  placeholder="Semestre"
                  type="number"
                  onChange={(ev) => {
                    setQuery((state) => ({
                      ...state,
                      semestre: ev.target.value,
                    }));
                  }}
                />
              </div>
            </>
          )}
          {selecao === 'Aluno' && (
            <>
              <div
                style={{
                  height: '10%',
                  width: '80%',
                  fontSize: '16px',
                  margin: '10px',
                }}
              >
                idade
                <InputComponent
                  placeholder="Idade"
                  type="number"
                  onChange={(ev) => {
                    setQuery((state) => ({ ...state, idade: ev.target.value }));
                  }}
                />
              </div>
              <div
                style={{
                  height: '10%',
                  width: '80%',
                  fontSize: '16px',
                  margin: '5px',
                }}
              >
                Turma
                <Autocomplete
                  id="combo-box-demo"
                  options={turmas}
                  getOptionLabel={(option) => option.nome}
                  onChange={(e, target) => {
                    setQuery((state) => ({ ...state, turma: target.nome }));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="turmas"
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
                  height: '10%',
                  width: '80%',
                  fontSize: '16px',
                  margin: '5px',
                }}
              >
                sexo
                <Autocomplete
                  id="combo-box-demo"
                  options={['masculino', 'feminino', 'outro']}
                  getOptionLabel={(option) => option}
                  onChange={(e, target) => {
                    setQuery((state) => ({ ...state, sexo: target }));
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="sexo"
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
            </>
          )}
          <div
            style={{
              alignSelf: 'center',
              justifySelf: 'flex-end',
              marginRight: '15px',
              gridColumn: '3/3',
              gridRow: '6/6',
            }}
          >
            Ativo:
            <Switch
              color="primary"
              label="ativo:"
              style={{
                alignSelf: 'center',
                justifySelf: 'center',
              }}
              onChange={(e, target) => {
                const it = target ? 1 : 0;
                setQuery((state) => ({ ...state, ativo: it }));
              }}
            />
          </div>
        </Grid>
        <Grid justify="center" alignItems="center" container>
          <Button
            label="Cancelar"
            variant="tertiary"
            margin="10px 5px 10px 0"
            type="submit"
            onClick={closeModal}
          />
          <Button
            label="Criar!"
            variant="primary"
            margin="10px 5px 10px 0"
            type="submit"
            onClick={handleOnSubmit}
          />
        </Grid>
      </>
    </ModalComponent>
  );
};
