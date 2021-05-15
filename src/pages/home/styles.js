import styles from 'styled-components';
import { GiBookshelf } from 'react-icons/gi';
import { SiGoogleclassroom } from 'react-icons/si';
import { TiGroup } from 'react-icons/ti';
import { BsCalendar } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { IoIosArrowDropright } from 'react-icons/io';

const ICONHEADER = `
  color: inherit;
  font-size: 13px;
  margin-right: 20px;
`;
export const Body = styles.div`
    display: grid;
    grid-template-columns: 6fr 6fr;
    grid-template-rows: 4fr 26fr;
    overflow-y: hidden;
`;

export const BodyTable = styles.div`
    grid-row: 2/2;
    grid-column: 2/2;
    display: flex;
    align-items:center;
    just-content: center;
    background-color: #eee;
    border-radius: 10px;
    padding: 30px;
    max-height: 72vh;
`;

export const BodyMisc = styles.div`
    grid-row: 2/2;
    grid-column: 1/1;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    just-content: space-between;
    border-radius: 10px;
    padding: 30px;
`;

export const BodyItemContainer = styles.div`
    grid-column: 1/5;
    width: 100%;
    height: 57vh;
    background-color: #eee;
    border-radius: 10px;
    padding: 30px;
    display: grid;
    grid-template-columns: 4fr 4fr 4fr;
    grid-template-rows: 2fr 2fr 2fr 2fr 2fr 2fr;
    
`;

export const HeaderTableChoice = styles.div`
    grid-column: 1/3;
    width: 100%;
    height: 10vh;
    display: grid;
    margin-bottom: 20px;
    grid-template-columns: 3fr 3fr 3fr 3fr;
    grid-gap: 2px;
    align-items: center;
    justify-content: center;
`;

export const BodyContent = styles.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 6fr 6fr ;
`;

export const ActionButton = styles.div`
    grid-column: ${({ posit }) => `${posit}/${posit}`};
    background-color: ${({ color }) => color};
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 2px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: flex;
    align-text: start;
    justify-content: space-between;
    align-items: end;
    font-size: 17px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    width:${({ type }) => (type === 'del' ? '100px' : '90%')};
    height: ${({ type }) => (type === 'del' ? '40px' : '70%')};;

    :hover{
      width: ${({ type }) => (type === 'del' ? '100px' : '95%')};
      height: ${({ type }) => (type === 'del' ? '40px' : '80%')};;
      font-size: ${({ type }) => (type === 'del' ? '17px' : '20px')};;;
      transition: 0.1s;
    }
`;

export const SelectButton = styles.div`
    background-color: ${(props) => props.color};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 2px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: flex;
    align-text: center;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
`;

export const RouteButton = styles.div`
    background-color: ${({ color }) => color};
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 2px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    display: flex;
    align-text: start;
    justify-content: space-between;
    align-items: end;
    font-size: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    width: 90%;
    height: 90%;

    :hover{
      width: 95%;
      height: 100%;
      font-size: 25px;
      transition: 0.1s;
    }
`;
export const IconCourses = styles(GiBookshelf)`
  ${ICONHEADER}
  align-self: flex-end;
  font-size: 40px;
  margin: 0;
  
`;

export const IconClasses = styles(SiGoogleclassroom)`
  ${ICONHEADER}
  align-self: flex-end;
  font-size: 40px;
  margin: 0;
 
`;

export const IconStudents = styles(TiGroup)`
  ${ICONHEADER}
  align-self: flex-end;
  font-size: 40px;
  margin: 0;

`;

export const IconMeeting = styles(BsCalendar)`
   ${ICONHEADER}
  align-self: flex-end;
  font-size: 40px;
  margin: 0;

`;

export const IconDelete = styles(AiFillDelete)`
   ${ICONHEADER}
  align-self: flex-end;
  font-size: 40px;
  margin: 0;

`;

export const IconUserNotSelected = styles(IoIosArrowDropright)`
   ${ICONHEADER}
  align-self: flex-end;
  font-size: 300px;
  margin: 0;
  grid-column: 2/2;
`;
