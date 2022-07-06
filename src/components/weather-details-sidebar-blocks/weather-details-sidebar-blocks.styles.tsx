import styled from "styled-components";
import Container from "@mui/material/Container";

export const DetailsPageSidebarBlocks = styled(Container)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 78vh;
    padding: 0;
    padding-top: 8%;

    @media (max-width: 860px) {
      display: none;
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;
