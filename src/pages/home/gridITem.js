/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable jsx-a11y/alt-text */
import { GridListTile, GridListTileBar } from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';

const GridItemComponent = ({ item, index }) => {
  console.log(item);
  return (
    <>
      <img
        src={`${item?.thumbnail?.path}/portrait_incredible.${item?.thumbnail?.extension}`}
        alt={item?.title}
      />
      <GridListTileBar
        title={item.title}
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
