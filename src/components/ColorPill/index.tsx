import * as React from "react";
import { Box, Pressable } from "native-base";
import { StyleSheet } from "react-native";
import { ColorType } from "native-base/lib/typescript/components/types";
import { ColorThemeContext } from "../../context";

interface ColorPillProps {
  color: ColorType;
  value: modeType;
  onClick: (mode: modeType) => void;
}

const ColorPill: React.FC<ColorPillProps> = (props) => {
  const { mode } = React.useContext(ColorThemeContext);

  return (
    <Pressable mb="3" mr="2" onPress={() => props.onClick(props.value)}>
      <Box
        style={[styles.pill, mode === props.value ? styles.active : null]}
        bgColor={props.color}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pill: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  active: {
    borderWidth: 3,
    borderColor: "white",
  },
});

export default ColorPill;
