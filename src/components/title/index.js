import React from 'react';
import { Body, Text } from './styles';

const TitleComponent = ({ text }) => (
  <Body>
    <Text>{text}</Text>
  </Body>
);

// export default React.memo(TitleComponent);
export default TitleComponent;
