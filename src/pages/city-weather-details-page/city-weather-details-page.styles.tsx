import styled from "styled-components";
import Container from "@mui/material/Container";

export const DetailsPageContainer = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: #fff;

    @media (max-width: 860px) {
      flex-direction: column-reverse;
      height: inherit;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
