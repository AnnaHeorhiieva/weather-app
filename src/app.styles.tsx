import styled from "styled-components";
import Container from "@mui/material/Container";

export const AppContainer = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100vw;
    }
  }
`;
