import {
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
import Button from '../../components/button/index';
import { DeleteComicInCart } from '../../store/modules/cart/actions';
import CartItem from './cartItem';
import { Body, DeleteButton, ListItemCart } from './styles';
import TotalValue from './totalValueComponent';
import { ModalCheckout } from './modalCheckout';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Cart = () => {
  const classes = useStyles();
  const [modalCheckoutOpen, setModalCheckoutOpen] = useState(false);
  const [hasRare, setHasRare] = useState(false);
  const [value, setValue] = useState(0);

  const cart = useSelector((state) => state.cart);
  const collection = useSelector((state) => state.collection);

  useMemo(() => {
    if (cart.comics.length > 0) {
      let totalValue = 0;
      cart.comics.forEach((item) => {
        totalValue += item.prices[0].price;
        setValue(totalValue.toFixed(2));
      });

      const rareFinder = cart.comics.find((item) => item.id % 9 === 1);

      rareFinder ? setHasRare(true) : setHasRare(false);
      console.log(hasRare, rareFinder);
    }
  }, [cart]);

  const dispatch = useDispatch();

  const HandleCloseModal = () => {
    setModalCheckoutOpen(false);
  };

  return (
    <>
      <Body>
        {cart.comics.length > 0 && (
          <Grid
            container
            direction="column"
            justify="center"
            align="center"
            style={{
              maxWidth: '500px',
            }}
          >
            <List
              className={classes}
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                maxHeight: '500px',
              }}
            >
              {cart.comics.length > 0 ? (
                cart.comics.map((item, index) => (
                  <ListItem
                    style={{
                      background: '#222',
                      margin: '3px',
                      cursor: 'pointer',
                    }}
                  >
                    <CartItem item={item} />
                    <ListItemCart
                      primary={item.title}
                      secondary={`R$ ${item.prices[0].price.toFixed(2)}`}
                    />
                    {item.id % 9 === 1 && (
                      <StarIcon
                        color="primary"
                        fontSize="small"
                        style={{ color: 'yellow' }}
                      />
                    )}
                    <DeleteButton
                      onClick={() => dispatch(DeleteComicInCart(index))}
                    >
                      x
                    </DeleteButton>
                  </ListItem>
                ))
              ) : (
                <p>Nothing To Show</p>
              )}
            </List>
            <TotalValue value={value} />
            <Button
              label="Proceed to checkout"
              variant="danger"
              onClick={() => setModalCheckoutOpen(true)}
            />
          </Grid>
        )}

        {cart.comics.length < 1 && <p>Nothing To Show</p>}
      </Body>
      <ModalCheckout
        open={modalCheckoutOpen}
        closeModal={HandleCloseModal}
        value={value}
        hasRare={hasRare}
      />
    </>
  );
};

export default Cart;
