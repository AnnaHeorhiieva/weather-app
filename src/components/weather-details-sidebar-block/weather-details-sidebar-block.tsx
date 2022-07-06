import React from "react";

import { MUIIcon } from "utils/helpers/get-detailed-weather-data";

import BoldText from "mui-shared-components/bold-text/bold-text";
import {
  BlockIconContainer,
  BlockValueContainer,
  DetailsPageSidebarBlock,
} from "components/weather-details-sidebar-block/weather-details-sidebar-block.styles";

interface DetailsSidebarBlockProps {
  blockName: string;
  blockValue: number | string;
  blockIcon: MUIIcon;
}

function WeatherDetailsSidebarBlock({
  blockName,
  blockValue,
  blockIcon: BlockIcon,
}: DetailsSidebarBlockProps): JSX.Element {
  return (
    <DetailsPageSidebarBlock>
      <BlockIconContainer>
        <BlockIcon />
      </BlockIconContainer>
      <BlockValueContainer>
        <BoldText color="#dde1f9" fontSize="0.8">
          {blockName}
        </BoldText>
        <BoldText color="#121318" fontSize="1.1">
          {blockValue}
        </BoldText>
      </BlockValueContainer>
    </DetailsPageSidebarBlock>
  );
}

export default WeatherDetailsSidebarBlock;
