import { Box, Text } from "native-base";
import * as React from "react";

interface ScreenDisplayProps {
  ans: string;
  equ?: string;
  preview?: string;
}

const ScreenDisplay: React.FC<ScreenDisplayProps> = (props) => {
  return (
    <>
      <Box alignItems="flex-end">
        <Text fontWeight="bold" fontSize="2xl" color="white" mb="-4">
          {props.equ}
        </Text>
        <Text
          letterSpacing="xl"
          fontWeight="black"
          fontSize="5xl"
          color="white"
        >
          {props.ans}
        </Text>
        {!props.equ && (
          <Text fontWeight="bold" fontSize="2xl" color="white" mt="-4">
            {props.preview}
          </Text>
        )}
      </Box>
    </>
  );
};

export default ScreenDisplay;
