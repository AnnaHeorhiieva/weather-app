import React from "react";

import Slide from "@mui/material/Slide";
import {
  SnackbarComponent,
  MuiAlertComponent,
} from "mui-shared-components/alert/alert.styles";

interface AlertProps {
  isOpened: boolean;
  message: string;
  handleCloseCallback: () => void;
}

function TransitionLeft(props: any): JSX.Element {
  return <Slide {...props} direction="left" />;
}

function Alert({
  isOpened,
  message,
  handleCloseCallback,
}: AlertProps): JSX.Element {
  const handleClose = () => handleCloseCallback();

  return (
    <SnackbarComponent
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      autoHideDuration={1800}
      open={isOpened}
      onClose={handleClose}
      TransitionComponent={TransitionLeft}
    >
      <MuiAlertComponent variant="outlined" icon={false}>
        {message}
      </MuiAlertComponent>
    </SnackbarComponent>
  );
}

export default Alert;
