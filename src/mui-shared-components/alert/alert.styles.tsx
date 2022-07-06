import React from "react";
import styled from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const AlertElement = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => (
    <MuiAlert elevation={6} ref={ref} variant="outlined" {...props} />
  )
);

export const SnackbarComponent = styled(Snackbar)`
  && {
    width: 20%;
    top: 23px;
    right: 3%;
  }
`;

export const MuiAlertComponent = styled(AlertElement)`
  && {
    width: 100%;
    color: #fff;
    font-weight: 700;
    font-family: "Nunito", sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    border: none;
    box-shadow: none;
    background-color: #ff9748;
  }
`;
