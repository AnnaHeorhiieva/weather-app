import styled from "styled-components";
import Container from "@mui/material/Container";

export const DetailsPageSidebarBlock = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    padding: 5% 7%;
    background-color: #ffffff43;
    border-radius: 8px;
    margin-bottom: 1vh;

    :last-child {
      margin-bottom: 0;
    }

    svg {
      font-size: 1.2rem;
      color: #ff8d14;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const BlockIconContainer = styled(Container)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 16%;
    height: 100%;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const BlockValueContainer = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    width: 84%;
    height: 100%;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
