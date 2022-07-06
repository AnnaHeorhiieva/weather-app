import React from "react";

import BeatLoader from "react-spinners/BeatLoader";
import { SpinnerContainer } from "components/spinner/spinner.styles";

function Spinner(): JSX.Element {
  return (
    <SpinnerContainer>
      <BeatLoader color="#f7aa5a" size={10} speedMultiplier={1.3} />
    </SpinnerContainer>
  );
}

export default Spinner;
