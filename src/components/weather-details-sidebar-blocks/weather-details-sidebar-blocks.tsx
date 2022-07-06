import React from "react";

import { MUIIcon } from "utils/helpers/get-detailed-weather-data";

import WeatherDetailsSidebarBlock from "components/weather-details-sidebar-block/weather-details-sidebar-block";
import { DetailsPageSidebarBlocks } from "components/weather-details-sidebar-blocks/weather-details-sidebar-blocks.styles";

interface DetailsSidebarBlocksProps {
  sidebarBlocksArray: [string, [number | string, MUIIcon]][];
}

function WeatherDetailsSidebarBlocks({
  sidebarBlocksArray,
}: DetailsSidebarBlocksProps): JSX.Element {
  const renderSidebarBlocks = sidebarBlocksArray.map(
    ([blockName, blockData]) => {
      const [blockValue = "No data", blockIcon] = blockData;

      return (
        <WeatherDetailsSidebarBlock
          key={blockName}
          blockName={blockName}
          blockValue={blockValue}
          blockIcon={blockIcon}
        />
      );
    }
  );

  return (
    <DetailsPageSidebarBlocks data-testid="sidebar-blocks">
      {renderSidebarBlocks}
    </DetailsPageSidebarBlocks>
  );
}

export default WeatherDetailsSidebarBlocks;
