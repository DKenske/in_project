/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/alt-text */
import { GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSelector } from 'react-redux';

const GridItemComponent = ({ item, index }) => {
  const collection = useSelector((state) => state.collection);

  const alreadHeadThisComic = collection.comics.find(
    (comic) => comic.id === item.id
  );

  return (
    <>
      <img
        src={`${item?.thumbnail?.path}/portrait_incredible.${item?.thumbnail?.extension}`}
        alt={item?.title}
      />
      {alreadHeadThisComic && (
        <StarIcon
          color="primary"
          fontSize="small"
          style={{ zIndex: '99999999', color: 'yellow' }}
        />
      )}
      <GridListTileBar
        title={item.title}
        subtitle={
          alreadHeadThisComic ? (
            <CheckCircleIcon
              color="primary"
              fontSize="small"
              style={{ zIndex: '99999999', color: 'green' }}
            />
          ) : (
            <span>Price: {item?.prices[0]?.price}</span>
          )
        }
        actionIcon={
          index && (
            <StarIcon
              color="primary"
              fontSize="small"
              style={{ zIndex: '99999999', color: 'yellow' }}
            />
          )
        }
      />
    </>
  );
};

export default GridItemComponent;
