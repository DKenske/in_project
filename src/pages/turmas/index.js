/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import axios from 'axios';
import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { HeaderTableChoice, RouteCourseButton, Body } from './styles';
import history from '../../services/history';
import mary1 from '../../assets/images/mary1.png';
import mary2 from '../../assets/images/mary2.png';
import mary3 from '../../assets/images/mary3.png';
import mary4 from '../../assets/images/mary4.png';
import mary5 from '../../assets/images/mary5.png';

const redirect = (e, route) => {
  e.stopPropagation();
  history.push(route);
};

const Turmas = (props) => {
  return (
    <Body>
      <HeaderTableChoice>
        <RouteCourseButton color="#F54438">
          <img
            src={mary1}
            style={{
              width: '70%',
              height: '100%',
              zIndex: '0',
            }}
          />
        </RouteCourseButton>
        <RouteCourseButton color="#F5D438">
          <img
            src={mary2}
            style={{
              width: '70%',
              height: '100%',
              zIndex: '0',
            }}
          />
        </RouteCourseButton>
        <RouteCourseButton color="#28B3DE">
          <img
            src={mary3}
            style={{
              width: '70%',
              height: '100%',
              zIndex: '0',
            }}
          />
        </RouteCourseButton>
        <RouteCourseButton color="#39b54a">
          <img
            src={mary4}
            style={{
              width: '70%',
              height: '100%',
              zIndex: '0',
            }}
          />
        </RouteCourseButton>
        <RouteCourseButton color="#f7941d">
          <img
            src={mary5}
            style={{
              width: '70%',
              height: '100%',
              zIndex: '0',
            }}
          />
        </RouteCourseButton>
      </HeaderTableChoice>
    </Body>
  );
};

export default Turmas;
