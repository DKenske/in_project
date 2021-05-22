/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ModalAdmin } from './modalAdmin';
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
import history from '../../services/history';

const Home = (props) => {
  const [adminOpen, setAdminOpen] = useState(false);
  const closeAdmin = () => {
    setAdminOpen(false);
  };
  const redirect = (e, route) => {
    e.stopPropagation();
    history.push(route);
  };
  return (
    <Body>
      <HeaderTableChoice>
        <RouteButton color="#F54438" onClick={(e) => redirect(e, '/turmas')}>
          Turmas
          <IconClasses />
        </RouteButton>
        <RouteButton color="#28B3DE" onClick={(e) => setAdminOpen(true)}>
          Administração
          <IconStudents />
        </RouteButton>
        <RouteButton color="#F5D438">
          Calendario
          <IconMeeting />
        </RouteButton>
      </HeaderTableChoice>
      <ModalAdmin open={adminOpen} closeModal={closeAdmin} />
    </Body>
  );
};

export default Home;
