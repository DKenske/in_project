import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

export const Body = styled.div`
  padding: 8px 0;
  margin-bottom: 30px;

  @media print {
    padding-top: 8px;
    padding-bottom: 4px;
    margin-bottom: 2.5px;
  }
`;

export const Text = styled(Typography)`
  font-size: 25px !important;
  margin-bottom: 1 @media print {
    font-size: 15px !important;
  }
`;
