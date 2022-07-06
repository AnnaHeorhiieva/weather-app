import styled from "styled-components";
import clouds from "assets/clouds-background.jpg";
import Container from "@mui/material/Container";

export const DetailsPageSidebar = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 35%;
    height: 100vh;
    padding: 5%;
    background-image: url(${clouds});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;

    @media (max-width: 860px) {
      width: 100%;
      height: 20vh;
      min-height: 180px;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 1200px) {
      max-width: 35%;
    }
  }
`;
