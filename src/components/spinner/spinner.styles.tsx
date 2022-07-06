import styled from "styled-components";
import Container from "@mui/material/Container";

export const SpinnerContainer = styled(Container)`
  && {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
