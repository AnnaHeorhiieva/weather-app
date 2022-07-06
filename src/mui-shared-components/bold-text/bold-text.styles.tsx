import styled from "styled-components";
import Typography from "@mui/material/Typography";

export const BoldTypography = styled(Typography)`
  && {
    color: ${(props) => `${props.color}`};
    font-size: ${(props) => `${props.fontSize}rem`};
    font-weight: 700;
    font-family: "Sniglet", cursive;
  }
`;
