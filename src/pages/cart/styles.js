import { ListItemText } from '@material-ui/core';
import styles from 'styled-components';

export const Body = styles.div`
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    overflow-y: hidden;
    padding-top: 20px;
    padding-right: 10px;
    padding-left: 10px;
`;

export const ListItemCart = styles(ListItemText)`
    color: white !important;
`;

export const ValueComponent = styles.div`
    color: white;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    align-text: center;
    align-self: center;
    justify-self: center;
    width: 100px;
    height: 100px;
    background: #111;
    margin: 20px;

`;

export const DeleteButton = styles.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-text: center;
    align-items:center;
    justify-content: center;
    &:hover{
        background: #777
    }
`;

export const ComicModalHeader = styles.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 300px;
    background-color: #f54438;
    justify-content: flex-end;
    align-items: center;
`;

export const CloseModalButton = styles.div`
    width: 10%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    cursor: pointer;

    &:hover{
      background: #f55539
    }
`;

export const ComicModalContainer = styles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 10px;
`;
