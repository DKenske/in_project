/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import {
  CircularProgress,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
} from '@material-ui/core';
import Loading from 'react-loading';
import { Pagination } from '@material-ui/lab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Body, ImageItem, LoadingContainer } from './styles';
import history from '../../services/history';
import { GetComicsRequest } from '../../store/modules/getComics/actions';
import GridItem from './gridITem';
import ModalComic from './showComicModal';
import DrawerMenu from '../../components/navigation/SideDrawer';
import Button from '../../components/button/index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const Store = (props) => {
  const [openShowComic, setOpenShowComic] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

  const dispatch = useDispatch();
  const comics = useSelector((state) => state.getComics);
  const cupoms = useSelector((state) => state.cupoms);
  const collection = useSelector((state) => state.collection);
  const classes = useStyles();

  const handleCloseModal = () => {
    setOpenShowComic(false);
  };

  const handleChangePage = (e, newPage) => {
    console.log(newPage);
    dispatch(GetComicsRequest(newPage));
  };

  useMemo(() => {
    console.log(openShowComic, itemSelected, cupoms);
  }, [openShowComic]);

  useMemo(() => {
    dispatch(GetComicsRequest());
  }, []);

  return (
    <Body>
      <>
        <Pagination
          count={Math.ceil(comics?.data?.total / 27)}
          color="secondary"
          style={{ zIndex: '999999999', color: 'white', marginTop: '15px' }}
          onChange={handleChangePage}
        />

        {comics.data && comics.data.results ? (
          <GridList
            cellHeight={324}
            cols={9}
            className={classes.gridList}
            style={{ width: '100%', height: '100%' }}
          >
            <GridListTile key="Subheader" cols={9} style={{ height: '10px' }} />
            {comics.data.results.map((item) => (
              <ImageItem
                onClick={() => {
                  setOpenShowComic(true);
                  setItemSelected(item);
                }}
              >
                <GridItem item={item} index={item.id % 9 === 1} />
              </ImageItem>
            ))}
          </GridList>
        ) : null}
        {comics.loading && (
          <LoadingContainer>
            <CircularProgress
              color="secondary"
              style={{ marginBottom: '30px' }}
            />
            Energizing!
          </LoadingContainer>
        )}
        {openShowComic && (
          <ModalComic
            open={openShowComic}
            item={itemSelected}
            handleClose={handleCloseModal}
            fullWidth
          />
        )}
      </>
    </Body>
  );
};

export default Store;
