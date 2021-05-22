import React from 'react';
import { Body, Text } from './styles';

const TitleComponent = ({ text, style }) => (
  <Body>
    <Text style={style}>{text}</Text>
  </Body>
);

// export default React.memo(TitleComponent);
export default TitleComponent;
