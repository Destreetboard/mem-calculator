import { Box, Pressable, Text } from "native-base";
import * as React from "react";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from "react-native-responsive-screen";

interface KeyProps {
  text: string;
  icon?: any;
  hasBg?: boolean;
  onClick?: (value: string) => void;
}

const Key: React.FC<KeyProps> = (props) => {
  return (
    <>
      <Pressable
        {...props}
        style={[styles.button]}
        onPress={() => (props.onClick ? props.onClick(props.text) : null)}
      >
        <Box style={[props.hasBg && styles.bg]}>
          {props.icon ? (
            props.icon
          ) : (
            <Text
              letterSpacing="xl"
              color={"white"}
              fontSize="4xl"
              fontWeight={"black"}
            >
              {props.text}
            </Text>
          )}
        </Box>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wd("25%"),
    height: wd("20%"),
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 4,
    paddingLeft: 5,
  },
});

export { Key };
