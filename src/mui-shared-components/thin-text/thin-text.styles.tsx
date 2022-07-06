import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const ThinTypography = styled(Typography)`
  && {
    color: ${(props) => `${props.color}`};
    font-size: ${(props) => `${props.fontSize}rem`};
    font-weight: 300;
    font-family: "Nunito", sans-serif;
  }
`;
