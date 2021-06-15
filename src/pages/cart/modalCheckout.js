import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button/index';
import InputComponent from '../../components/input';
import ModalComponent from '../../components/modal';
import { CleanCart } from '../../store/modules/cart/actions';
import { PushComicInCollection } from '../../store/modules/collection/actions';
import { InvalidateCuponRequest } from '../../store/modules/coupons/actions';
import {
  CloseModalButton,
  ComicModalContainer,
  ComicModalHeader,
} from './styles';
import TotalValue from './totalValueComponent';

const INITIAL_QUERY = {
  cardNumber: null,
  securityKey: null,
  docNumber: null,
  cardBrand: null,
};

export const ModalCheckout = ({ open, closeModal, value, hasRare }) => {
  const [checkoutQuery, setCheckoutQuery] = useState(INITIAL_QUERY);
  const [step, setStep] = useState(0);
  const [cuponValue, setCuponValue] = useState(0);
  const [totalValue, setTotalValue] = useState(value);
  const [cuponCode, setCuponCode] = useState();
  const [cuponId, setCuponId] = useState();
  const [hasCupom, setHasCupom] = useState(false);
  const [cuponError, setCuponError] = useState(false);
  const [cuponErrorMessage, setCuponErrorMessage] = useState('');
  const [checkoutError, setCheckoutError] = useState(false);
  const [checkoutErrorMessage, setCheckoutErrorMessage] = useState('');

  const dispatch = useDispatch();

  const cupoms = useSelector((state) => state.cupoms.cupoms);
  const cart = useSelector((state) => state.cart.comics);

  // eslint-disable-next-line consistent-return
  const CheckCoupon = () => {
    // eslint-disable-next-line radix
    const cupom = cupoms.find((item) => item.code === parseInt(cuponCode));

    if (!cupom) {
      console.log(cuponError);
      setCuponErrorMessage('no coupon');
      return setCuponError(true);
    }

    if (hasRare && cupom.type === 'normal') {
      setCuponErrorMessage(
        'you have Rare comics in Cart, please, you may have a Rare Coupon Too!'
      );
      return setCuponError(true);
    }
    setCuponErrorMessage('');
    setCuponError(false);
    setHasCupom(true);
    setCuponValue(cupom.discount);
    setCuponId(cupom.id);

    (value - cuponValue).toFixed(2) <= 0
      ? setTotalValue(0)
      : setTotalValue((value - cuponValue).toFixed(2));
  };

  const handleCheckout = () => {
    CheckCoupon();
    setStep(1);
  };

  // eslint-disable-next-line consistent-return
  const handleBuyComics = () => {
    if (!checkoutQuery.cardNumber) {
      setCheckoutError(true);
      return setCheckoutErrorMessage('Missing Card Number');
    }

    if (!checkoutQuery.securityKey) {
      setCheckoutError(true);
      return setCheckoutErrorMessage('Missing security key Number');
    }
    if (!checkoutQuery.docNumber) {
      setCheckoutError(true);
      return setCheckoutErrorMessage('Missing Doc Number');
    }
    if (!checkoutQuery.cardBrand) {
      setCheckoutError(true);
      return setCheckoutErrorMessage('Missing Card Brand Number');
    }

    if (hasCupom) {
      dispatch(InvalidateCuponRequest(cuponId));
    }
    console.log(cart);
    dispatch(CleanCart());
    dispatch(PushComicInCollection(cart));
    closeModal();
  };

  useMemo(() => {
    if (hasCupom) {
      (value - cuponValue).toFixed(2) <= 0
        ? setTotalValue(0)
        : setTotalValue((value - cuponValue).toFixed(2));
    }
  }, [cuponValue]);

  useMemo(() => {
    setCuponValue(0);
    setStep(0);
    setCuponId(null);
    setCuponCode(null);
    setHasCupom(false);
    setCuponError(false);
    setCuponErrorMessage(false);
    setCheckoutError(false);
    setCheckoutQuery(INITIAL_QUERY);
    setCheckoutErrorMessage('');
    setTotalValue(value);
  }, [open]);

  return (
    <>
      <ModalComponent
        modalState={open}
        onBackdropClick={closeModal}
        onClose={closeModal}
        minWidth="600px"
        variant
      >
        <ComicModalHeader>
          <CloseModalButton onClick={closeModal}>X</CloseModalButton>
        </ComicModalHeader>
        {step === 0 && (
          <ComicModalContainer>
            <TotalValue
              style={{ width: '80%' }}
              value={value}
              totalValue={totalValue}
              cuponValue={cuponValue}
              hasCupom={hasCupom}
            />
            {cuponError && (
              <p style={{ color: 'red', width: '200px' }}>
                {cuponErrorMessage}
              </p>
            )}
            <InputComponent
              style={{ width: '80%' }}
              placeholder="Cupom"
              onChange={(e) => setCuponCode(e.target.value)}
            />
            <Button
              variant="danger"
              style={{ width: '80%' }}
              label="Check Cupom"
              onClick={CheckCoupon}
            />
            <Button
              variant="danger"
              style={{ width: '80%' }}
              label="Checkout"
              onClick={handleCheckout}
            />
          </ComicModalContainer>
        )}
        {step === 1 && (
          <ComicModalContainer>
            <TotalValue
              style={{ width: '80%', height: '40px' }}
              value={totalValue}
            />
            <InputComponent
              required
              style={{ width: '80%', marginBottom: '10px' }}
              placeholder="Credit Card Number"
              onChange={(e) =>
                setCheckoutQuery((state) => ({
                  ...state,
                  cardNumber: e.target.value,
                }))
              }
            />
            <InputComponent
              required
              style={{ width: '80%', marginBottom: '10px' }}
              placeholder="security Key"
              onChange={(e) =>
                setCheckoutQuery((state) => ({
                  ...state,
                  securityKey: e.target.value,
                }))
              }
            />
            <InputComponent
              required
              style={{ width: '80%', marginBottom: '10px' }}
              placeholder="Document Number"
              onChange={(e) =>
                setCheckoutQuery((state) => ({
                  ...state,
                  docNumber: e.target.value,
                }))
              }
            />

            <Autocomplete
              loadingText="Carregando..."
              options={[
                'MASTERCARD',
                'VISA',
                'AMEX',
                'ELO',
                'HIPERCAR',
                'DINERS CLUB',
              ]}
              getOptionLabel={(option) => option}
              style={{
                width: '80%',
                marginBottom: '10px',
                background: 'white',
                borderRadius: '5px',
              }}
              onChange={(e, target) =>
                setCheckoutQuery((state) => ({
                  ...state,
                  cardBrand: target,
                }))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Card Options"
                  variant="outlined"
                />
              )}
            />
            {checkoutError && (
              <p style={{ color: 'red' }}>{checkoutErrorMessage}</p>
            )}
            <Button
              variant="danger"
              style={{ width: '80%' }}
              label="Checkout"
              onClick={handleBuyComics}
              type="submit"
            />
          </ComicModalContainer>
        )}
      </ModalComponent>
    </>
  );
};
