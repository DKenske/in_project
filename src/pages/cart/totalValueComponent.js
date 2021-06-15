/* eslint-disable no-nested-ternary */
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { ValueComponent } from './styles';

const TotalValue = ({ style, value, hasCupom, totalValue, cuponValue }) => {
  return hasCupom ? (
    <ValueComponent style={style}>
      <p>Total: R$ {parseFloat(totalValue).toFixed(2)} </p>
      <p>
        R${parseFloat(value).toFixed(2)} - {parseFloat(cuponValue).toFixed(2)}
      </p>
    </ValueComponent>
  ) : (
    <ValueComponent style={style}>Total: R$ {value}</ValueComponent>
  );
};

export default TotalValue;
