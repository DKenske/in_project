import { ListItemAvatar } from '@material-ui/core';
import React from 'react';

const CartItem = ({ item }) => {
  return (
    <ListItemAvatar>
      <img
        src={`${item.thumbnail.path}/portrait_small.${item.thumbnail.extension}`}
        alt={item.title}
      />
    </ListItemAvatar>
  );
};

export default CartItem;
