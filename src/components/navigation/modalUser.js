/* eslint-disable eqeqeq */
import { Avatar, Grid, Tab, Tabs } from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../modal';
import avatar from '../../assets/images/avatar.jpeg';
import {
  CloseModalButton,
  CupomContainer,
  ModalTitle,
  UserField,
  ComicModalHeader,
} from './styles';
import Button from '../button/index';
import { signOut } from '../../store/modules/auth/actions';

export const ModalUser = ({ open, closeModal }) => {
  const [value, setValue] = useState(0);
  const [cupomId, setCupomId] = useState('');
  const [cupomType, setCupomType] = useState('');
  const [actualId, setActualId] = useState();

  const dispatch = useDispatch();
  const cupoms = useSelector((state) => state.cupoms);

  console.log(cupoms);

  const generateId = () => {
    const randomIndex = Math.floor(Math.random() * cupoms.cupoms.length - 1);
    if (randomIndex === actualId) {
      generateId();
    } else {
      setActualId(randomIndex);
    }
  };

  const handleGenerateCupom = () => {
    generateId();
  };

  const handleChangeTab = (e, newValue) => {
    setValue(newValue);
  };

  useMemo(() => {
    console.log(cupoms?.cupoms[actualId]?.code, actualId);
    if (actualId) {
      setCupomId(cupoms?.cupoms[actualId]?.code);
      setCupomType(cupoms?.cupoms[actualId]?.type);
    }
  }, [actualId]);
  return (
    <>
      <ModalComponent
        modalState={open}
        onBackdropClick={closeModal}
        minWidth="600px"
        variant
      >
        <ComicModalHeader>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            indicatorColor="primary"
            variant="fullWidth"
            textColor="primary"
            style={{ fontSize: '20px', width: '60%' }}
          >
            <Tab label="User" style={{ fontSize: '20px' }} />
            <Tab label="Cupons" style={{ fontSize: '20px' }} />
          </Tabs>
          <CloseModalButton onClick={closeModal}>X</CloseModalButton>
        </ComicModalHeader>
        {value === 0 && (
          <Grid
            container
            direction="row"
            justify="center"
            align="center"
            style={{ width: '600px', height: '600px', marginTop: '20px' }}
          >
            <Avatar
              style={{
                width: '200px',
                height: '200px',
                marginBottom: '-200px',
              }}
            >
              <img src={avatar} alt="marvel test" style={{ width: '100%' }} />
            </Avatar>
            <div style={{ width: '100%' }}>
              <UserField>Hero: Daniel</UserField>
              <UserField>Level: Master</UserField>
              <UserField>Collection: Daniel</UserField>
              <Button
                variant="danger"
                label="Sign out"
                style={{ marginTop: '20px', width: '30%' }}
                onClick={() => dispatch(signOut())}
              />
            </div>
          </Grid>
        )}

        {value === 1 && (
          <Grid
            container
            direction="column"
            justify="center"
            align="center"
            style={{
              width: '600px',
              height: '600px',
              marginTop: '20px',
              alignItems: 'center',
            }}
          >
            <ModalTitle>Cupom</ModalTitle>
            <Grid
              style={{ width: '300px', height: '300px', marginTop: '20px' }}
            >
              <CupomContainer>{cupomId}</CupomContainer>
              <CupomContainer>{cupomType}</CupomContainer>
              <Button
                variant="danger"
                label="Generate Cupom!"
                onClick={() => handleGenerateCupom()}
              />
            </Grid>
          </Grid>
        )}
      </ModalComponent>
    </>
  );
};
