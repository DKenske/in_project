import React from 'react';
import { useSnackbar } from 'notistack';

const Toast = {
  success: text => {
    const { enqueueSnackbar } = useSnackbar();

    return (
      <>
        {enqueueSnackbar(text, {
          variant: 'success',
          autoHideDuration: 1500,
          preventDuplicate: true,
        })}
      </>
    );
  },
};

export default Toast();
