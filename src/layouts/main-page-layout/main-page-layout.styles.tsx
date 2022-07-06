import styled from "styled-components";
import Container from "@mui/material/Container";

export const MainPageLayoutWrapper = styled(Container)`
  && {
    background-color: #fff;
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const MainPageLayoutChildren = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0;
    padding-top: 70px;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
