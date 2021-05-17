/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, TablePagination } from '@material-ui/core';
import {
  HeaderTableChoice,
  RouteButton,
  ActionButton,
  BodyContent,
  IconCourses,
  IconClasses,
  IconStudents,
  IconMeeting,
  BodyTable,
  BodyMisc,
  Body,
  IconDelete,
  SelectButton,
} from './styles';
import { ItemContainer } from './itemContainer';
import { ModalDelete } from './modalDelete';
import { ModalCreate } from './modalCreate';

const StyledTableCell = withStyles((theme) => ({
  head: {
    textAlign: 'center',
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      cursos: 'pointer',
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const Home = (props) => {
  const [tableContent, setTableContent] = useState({});
  const [selecao, setSelecao] = useState('Aluno');
  const [page, setPage] = useState(0);
  const [itemSelected, setItemSelected] = useState(null);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [requestTable, setRequestTable] = useState(null);

  let firstRow;

  const rowsPerPage = 9;
  const classes = useStyles();
  const cleanItemSelected = () => {
    setItemSelected(null);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleCloseCreate = () => {
    setModalCreateOpen(false);
  };

  const handleCloseDelete = () => {
    setModalDeleteOpen(false);
  };

  const handleOpenDelete = () => {
    setModalDeleteOpen(true);
  };

  const getAlunos = async () => {
    const result = await axios.get('http://localhost:8010/aluno', {});
    if (result.data.rows) {
      setTableContent(result.data.rows);
    }
    console.log(tableContent);
  };

  const getCursos = async () => {
    const result = await axios.get('http://localhost:8010/curso', {});
    if (result.data.rows) {
      setTableContent(result.data.rows);
    }
    console.log(tableContent);
  };

  const getTurmas = async () => {
    const result = await axios.get('http://localhost:8010/turma', {});
    if (result.data.rows) {
      setTableContent(result.data.rows);
    }
    console.log(tableContent);
  };

  useMemo(() => {
    getAlunos();
  }, []);

  return (
    <Body>
      <HeaderTableChoice>
        <RouteButton
          color="#F54438"
          onClick={() => {
            getCursos();
            setSelecao('Curso');
            setRequestTable(getCursos);
            setItemSelected(null);
          }}
        >
          Cursos
          <IconCourses />
        </RouteButton>
        <RouteButton
          color="#A0DE54"
          onClick={() => {
            getTurmas();
            setSelecao('Turma');
            setRequestTable(getTurmas);
            setItemSelected(null);
          }}
        >
          Turmas
          <IconClasses />
        </RouteButton>
        <RouteButton
          color="#28B3DE"
          onClick={() => {
            getAlunos();
            setSelecao('Aluno');
            setRequestTable(getAlunos);
            setItemSelected(null);
          }}
        >
          Alunos
          <IconStudents />
        </RouteButton>
        <RouteButton color="#F5D438">
          Calendario
          <IconMeeting />
        </RouteButton>
      </HeaderTableChoice>
      <BodyContent />
      <BodyMisc>
        <ActionButton
          color="#A0DE54"
          onClick={() => {
            setModalCreateOpen(true);
          }}
          posit={1}
        >
          {`Adicionar ${selecao}`}
          <IconMeeting />
        </ActionButton>
        <ItemContainer
          selecao={selecao}
          getAlunos={getAlunos}
          userSelected={itemSelected}
          handleOpenDelete={handleOpenDelete}
          cleanItemSelected={cleanItemSelected}
        />
      </BodyMisc>
      <BodyTable>
        {tableContent && tableContent.length && (
          <TableContainer
            component={Paper}
            style={{ minHeight: '67vh', maxHeight: '67vh' }}
          >
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {Object.keys({ ...tableContent[0], ações: null }).map(
                    (item) => {
                      return (
                        item != 'sexo' &&
                        item != 'createdAt' &&
                        item != 'updatedAt' && (
                          <StyledTableCell>{item}</StyledTableCell>
                        )
                      );
                    }
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableContent
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <StyledTableRow key={row.id}>
                      {Object.keys({ ...row, acoes: null }).map((item) => {
                        if (item === 'ativo') {
                          return (
                            <StyledTableCell>
                              {row[item] === 1 ? 'Ativo' : 'Inativo'}
                            </StyledTableCell>
                          );
                        }
                        if (item === 'acoes') {
                          if (selecao === 'Aluno') {
                            return (
                              <StyledTableCell
                                style={{
                                  alignSelf: 'center',
                                  justifySelf: 'center',
                                  width: '90px',
                                }}
                              >
                                <SelectButton
                                  color="#02A1F7"
                                  onClick={() => {
                                    setItemSelected(row);
                                    console.log(itemSelected);
                                  }}
                                  style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                    width: '90px',
                                    height: '20px',
                                    border: '0',
                                    color: 'white',
                                  }}
                                >
                                  selecionar
                                </SelectButton>
                              </StyledTableCell>
                            );
                          }
                          if (selecao != 'Aluno') {
                            return (
                              <StyledTableCell
                                style={{
                                  alignSelf: 'center',
                                  justifySelf: 'center',
                                  width: '90px',
                                }}
                              >
                                <SelectButton
                                  color="#F54432"
                                  onClick={() => {
                                    setItemSelected(row);
                                    setModalDeleteOpen(true);
                                  }}
                                  style={{
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                    width: '90px',
                                    height: '20px',
                                    border: '0',
                                    color: 'white',
                                  }}
                                >
                                  Deletar
                                </SelectButton>
                              </StyledTableCell>
                            );
                          }
                        }
                        return (
                          item != 'sexo' &&
                          item != 'createdAt' &&
                          item != 'updatedAt' &&
                          item != 'ações' && (
                            <StyledTableCell>{row[item]}</StyledTableCell>
                          )
                        );
                      })}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPage={10}
              component="div"
              count={tableContent.length}
              page={page}
              onChangePage={handleChangePage}
            />
          </TableContainer>
        )}
      </BodyTable>
      {modalDeleteOpen ? (
        <ModalDelete
          open={modalDeleteOpen}
          closeModal={handleCloseDelete}
          currentItem={itemSelected}
          selecao={selecao}
          getTurmas={getTurmas}
          getAlunos={getAlunos}
          getCursos={getCursos}
          cleanItemSelected={cleanItemSelected}
        />
      ) : null}

      {modalCreateOpen ? (
        <ModalCreate
          open={modalCreateOpen}
          closeModal={handleCloseCreate}
          currentItem={itemSelected}
          selecao={selecao}
          getTurmas={getTurmas}
          getAlunos={getAlunos}
          getCursos={getCursos}
        />
      ) : null}
    </Body>
  );
};

export default Home;
