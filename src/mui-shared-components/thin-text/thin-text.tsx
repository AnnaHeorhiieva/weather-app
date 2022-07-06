import React from "react";
import { ThinTypography } from "mui-shared-components/thin-text/thin-text.styles";

interface ThinTextProps {
  children: string | number | undefined;
  color?: string;
  fontSize: string;
}

function ThinText({
  children,
  color = "#111",
  fontSize = "12",
}: ThinTextProps): JSX.Element {
  return (
    <ThinTypography color={color} fontSize={fontSize}>
      {children}
    </ThinTypography>
  );
}

export default ThinText;
