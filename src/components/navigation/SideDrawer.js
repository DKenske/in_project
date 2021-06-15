import { Drawer, Grid, makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GetComicsRequest } from '../../store/modules/getComics/actions';
import Button from '../button/index';
import { Input } from '../input/styles';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const DrawerMenu = ({ open, handleClose }) => {
  const [searchType, setSearchType] = useState('Comic Title');
  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  const handleSearch = () => {
    console.log(searchType);
    searchType === 'Comic Title' &&
      dispatch(GetComicsRequest(1, 'title', searchString));

    searchType === 'Characters' &&
      dispatch(GetComicsRequest(1, 'characters', searchString));
  };

  const classes = useStyles();
  return (
    <Drawer open={open} onClose={handleClose} anchor="right">
      <Grid
        container
        justify="center"
        style={{ width: '300px', marginTop: '100px' }}
      >
        <Autocomplete
          loadingText="Carregando..."
          options={['Comic Title', 'Characters']}
          getOptionLabel={(option) => option}
          style={{
            width: '80%',
            marginBottom: '10px',
            background: 'white',
            borderRadius: '5px',
          }}
          onChange={(e, type) => {
            setSearchType(type);
          }}
          renderInput={(params) => (
            <TextField {...params} placeholder="Filter By" variant="outlined" />
          )}
        />
        <Input
          placeholder="Search"
          style={{
            width: '80%',
            marginBottom: '10px',
            background: 'white',
            borderRadius: '5px',
          }}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <Button
          variant="danger"
          style={{
            width: '80%',
          }}
          label="Search"
          onClick={handleSearch}
        />
      </Grid>
    </Drawer>
  );
};

export default DrawerMenu;
