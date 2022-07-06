import React from "react";

import BoldText from "mui-shared-components/bold-text/bold-text";
import ThinText from "mui-shared-components/thin-text/thin-text";
import {
  CardFooter,
  DataBox,
} from "components/city-card-footer/city-card-footer.styles";

interface CityCardFooterProps {
  humidity: number | undefined;
  pressure: number | undefined;
  visibility: number;
}

function CityCardFooter({
  humidity,
  pressure,
  visibility,
}: CityCardFooterProps): JSX.Element {
  return (
    <CardFooter data-testid="city-card-footer">
      <DataBox>
        <ThinText color="#fff" fontSize="0.5">
          Humidity
        </ThinText>
        <BoldText color="#fff" fontSize="0.6">
          {humidity}
        </BoldText>
      </DataBox>
      <DataBox>
        <ThinText color="#fff" fontSize="0.5">
          Visibility
        </ThinText>
        <BoldText color="#fff" fontSize="0.6">
          {visibility}
        </BoldText>
      </DataBox>
      <DataBox>
        <ThinText color="#174456" fontSize="0.5">
          Pressure
        </ThinText>
        <BoldText fontSize="0.6">{pressure}</BoldText>
      </DataBox>
    </CardFooter>
  );
}

export default CityCardFooter;
