import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ModalComponent = ({
  modalState,
  onBackdropClick,
  maxWidth,
  minWidth,
  children,
  onClose,
  fullWidth,
  title,
  fullScreenMobile,
  TransitionComponent,
  transitionDuration,
  style,
  variant,
}) => {
  const theme = useTheme();
  fullScreenMobile
    ? (fullScreenMobile = useMediaQuery(theme.breakpoints.down('xs')))
    : null;
  return (
    <Dialog
      style={style}
      open={modalState}
      onBackdropClick={onBackdropClick}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      minWidth={minWidth}
      fullScreen={fullScreenMobile}
      TransitionComponent={TransitionComponent}
      transitionDuration={transitionDuration}
      variant={variant}
    >
      {title ? (
        <DialogTitle style={{ padding: '28px 32px' }}>{title}</DialogTitle>
      ) : null}

      <DialogContent
        style={{
          padding: '0',
          background: !variant ? 'black' : '#222',
          maxHeight: '510px',
          overflowY: 'hidden',
        }}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
