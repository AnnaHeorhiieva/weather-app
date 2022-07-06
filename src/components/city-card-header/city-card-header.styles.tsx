import styled from "styled-components";
import CardContent from "@mui/material/CardContent";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";

export const CardHeader = styled(CardContent)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 30%;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 10px;
  }
`;

export const CardTitleGroup = styled(CardContent)`
  && {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const WeatherImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

export const CardButtonsGroup = styled(ButtonGroup)`
  && {
  }
`;

export const CardButton = styled(IconButton)`
  && {
    padding: 6px;

    :hover {
      background-color: transparent;
    }

    :hover > svg {
      color: #fa9325;
      transition: color 0.3s ease-in;
    }

    svg {
      font-size: 1.1rem;
      font-weight: 500;
      color: #f7aa5a;
      transition: color 0.3s ease-out;
    }
  }
`;
