import styled from "styled-components";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

export const SearchFieldWrapper = styled(Container)`
  && {
    position: fixed;
    padding: 0;
    height: 90px;
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    z-index: 100;

    @media (max-width: 600px) {
      backdrop-filter: blur(5px);
    }

    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const SearchInputWrapper = styled(Container)`
  && {
    width: 50%;
    position: relative;
    padding: 0;

    @media (max-width: 600px) {
      width: 90%;
    }

    @media (min-width: 1200px) {
      max-width: 50%;
    }
  }
`;

export const SearchInput = styled(TextField)`
  && {
    width: 100%;

    .MuiOutlinedInput-root {
      background-color: #c5c5cd21;
      height: 46px;
      font-size: 0.8rem;
      color: #02042c;
      font-family: "Nunito", sans-serif;
      letter-spacing: 1.5px;
      font-weight: 700;
      border-radius: 10px;

      .MuiOutlinedInput-input {
        height: 0;
      }

      .MuiOutlinedInput-notchedOutline {
        border: none;
      }
    }
    @media (min-width: 1200px) {
      max-width: 100%;
    }
  }
`;

export const SearchButtonWrapper = styled(Container)`
  && {
    width: 34px;
    position: absolute;
    top: 6px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    @media (min-width: 1200px) {
      max-width: 34px;
    }
  }
`;

export const SearchButton = styled(IconButton)`
  && {
    padding: 7px;
    transition: transform 0.3s ease-out;

    :hover {
      background-color: transparent;
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }

    svg {
      font-size: 20px;
      color: #f7aa5a;
    }
  }
`;

export const additionalStyle = {
  "&::placeholder": {
    color: "#111560",
    fontFamily: "Nunito, sans-serif",
    letterSpacing: "1px",
    fontWeight: 800,
    fontSize: "0.8rem",
  },
};
