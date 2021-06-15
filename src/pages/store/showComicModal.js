/* eslint-disable no-nested-ternary */
import { Title } from '@material-ui/icons';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@material-ui/icons/Star';
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
  const { url } = item.urls[0];

  const cart = useSelector((state) => state.cart);
  const collection = useSelector((state) => state.collection);

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
    cart?.comics?.find((comic) => comic.id === item.id) &&
      setAlreadyTakenComic(true);

    collection?.comics?.find((comic) => comic.id === item.id) &&
      setAlreadyHaveComic(true);
  }, [cart]);

  return (
    <ModalComponent
      modalState={open}
      onBackdropClick={handleClose}
      onClose={handleClose}
      fullWidth={fullWidth}
      style={{ margin: '0', padding: '0' }}
    >
      <ComicModalHeader isRare={item.id % 9 === 1}>
        {item.id % 9 === 1 && (
          <StarIcon
            color="primary"
            fontSize="small"
            style={{ zIndex: '99999999', color: 'yellow', marginLeft: '30px' }}
          />
        )}
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
              disabled={buyButtonState || alreadyTakenComic || alreadyHaveComic}
              label={
                buyButtonState || alreadyTakenComic
                  ? 'The comic is in Cart!'
                  : alreadyHaveComic
                  ? 'The comic is in Collection!'
                  : `Add To Cart U$ ${item.prices[0].price}`
              }
              onClick={handleBuyComicEvent}
            />
            <ButtonComponent
              variant="danger"
              label="More Info"
              onClick={() => window.open(url)}
            />
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
