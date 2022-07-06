import React from "react";

import BoldText from "mui-shared-components/bold-text/bold-text";
import ThinText from "mui-shared-components/thin-text/thin-text";
import { CardMain } from "components/city-card-main/city-card-main.styles";

interface CityCardMainProps {
  description: string;
  temperature: number | undefined;
}

function CityCardMain({
  description,
  temperature,
}: CityCardMainProps): JSX.Element {
  return (
    <CardMain data-testid="city-card-main">
      <BoldText color="#f7aa5a" fontSize="1.2">
        {temperature}
      </BoldText>
      <ThinText color="#174456" fontSize="0.7">
        {description}
      </ThinText>
    </CardMain>
  );
}

export default CityCardMain;
