import { Title } from '@material-ui/icons';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../../components/button';
import ModalComponent from '../../components/modal';
import TitleComponent from '../../components/title';
import { PushComicInCart } from '../../store/modules/cart/actions';
import {
  CloseModalButton,
  ComicModalBody,
  ComicModalContainer,
  ComicModalHeader,
} from './styles';

const IMAGE_NOT_AVAIL =
  'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

const PAR_STYLE = {
  color: 'white',
  marginTop: '0',
  maxHeight: '280px',
  overflowY: 'scroll',
};

const PAR_STYLE_NO_SCROLL = {
  color: 'white',
  marginTop: '0',
};

const ModalComic = ({ open, item, handleClose, fullWidth }) => {
  const [buyButtonState, setBuyButtonState] = useState(false);
  const [alreadyTakenComic, setAlreadyTakenComic] = useState(false);
  const [alreadyHaveComic, setAlreadyHaveComic] = useState(false);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handlePushComicInCart = () => {
    dispatch(PushComicInCart(item));
  };

  const handleBuyComicEvent = () => {
    if (!alreadyTakenComic) {
      handlePushComicInCart();
      setBuyButtonState(true);
    }
  };

  useMemo(() => {
    console.log(cart);
    cart?.comics?.forEach((comic) => {
      if (comic.id === item.id) {
        setAlreadyTakenComic(true);
      }
    });
  }, [cart]);

  return (
    <ModalComponent
      modalState={open}
      onBackdropClick={handleClose}
      onClose={handleClose}
      fullWidth={fullWidth}
      style={{ margin: '0', padding: '0' }}
    >
      <ComicModalHeader>
        <CloseModalButton onClick={handleClose}>X</CloseModalButton>
      </ComicModalHeader>
      <ComicModalBody>
        <ComicModalContainer>
          <img
            src={`${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`}
            alt={item.title}
          />
          <div>
            <ButtonComponent
              variant="danger"
              disabled={buyButtonState || alreadyTakenComic}
              label={
                buyButtonState || alreadyTakenComic
                  ? 'The comic is in Cart!'
                  : `Add To Cart U$ ${item.prices[0].price}`
              }
              onClick={handleBuyComicEvent}
            />
            <ButtonComponent variant="danger" label="More Info" />
          </div>
        </ComicModalContainer>
        <ComicModalContainer>
          <TitleComponent style={{ color: 'red' }} text={item.title} />
          <div>
            <p style={{ color: 'white', marginTop: '0' }}>
              Autor:
              {item.creators?.items[0]?.name
                ? item.creators?.items[0]?.name
                : 'undefined'}
            </p>
            {item?.textObjects[0]?.text ||
            item.thumbnail.path === IMAGE_NOT_AVAIL ? (
              <p style={PAR_STYLE}>{item?.textObjects[0]?.text}</p>
            ) : (
              <p style={PAR_STYLE_NO_SCROLL}>Comming soon, stay atempt!</p>
            )}
          </div>
        </ComicModalContainer>
      </ComicModalBody>
    </ModalComponent>
  );
};

export default ModalComic;
