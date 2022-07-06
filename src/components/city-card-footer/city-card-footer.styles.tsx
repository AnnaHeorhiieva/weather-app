import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const CardFooter = styled(CardContent)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 40%;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

    :last-child {
      padding-bottom: 0;
    }
  }
`;

export const DataBox = styled(Card)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 30%;
    height: 50px;
    border-radius: 7px;
    box-shadow: none;

    :first-child {
      background-color: #073146;
    }
    :nth-child(2) {
      background-color: #ffa159;
    }
    :nth-child(3) {
      border: 1px solid #78878f;
    }
  }
`;
