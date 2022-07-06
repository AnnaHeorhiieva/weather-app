import React from "react";
import { BoldTypography } from "mui-shared-components/bold-text/bold-text.styles";

interface BoldTextProps {
  children: string | number | undefined;
  color?: string;
  fontSize: string;
}

function BoldText({
  children,
  color = "#111",
  fontSize = "12",
}: BoldTextProps): JSX.Element {
  return (
    <BoldTypography color={color} fontSize={fontSize}>
      {children}
    </BoldTypography>
  );
}

export default BoldText;
