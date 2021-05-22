import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ModalComponent = ({
  modalState,
  onBackdropClick,
  maxWidth,
  children,
  onClose,
  fullWidth,
  title,
  fullScreenMobile,
  TransitionComponent,
  transitionDuration,
}) => {
  const theme = useTheme();
  fullScreenMobile
    ? (fullScreenMobile = useMediaQuery(theme.breakpoints.down('xs')))
    : null;
  return (
    <Dialog
      style={{
        zIndex: 9999999999999,
      }}
      open={modalState}
      onBackdropClick={onBackdropClick}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      fullScreen={fullScreenMobile}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
    >
      {title ? (
        <DialogTitle style={{ padding: '28px 32px' }}>{title}</DialogTitle>
      ) : null}

      <DialogContent style={{ padding: '8px 32px' }}>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
