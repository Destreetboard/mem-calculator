import * as React from "react";
import * as UI from "native-base";
import { Key } from "../common";
import { StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonsProps {
  onEvaluateAll: () => void;
  onFucntionKeyPress: (fn: fnType) => void;
  onKeyPress: (value: string) => void;
}

const Buttons: React.FC<ButtonsProps> = (props) => {
  return (
    <UI.Box>
      <UI.HStack style={styles.row}>
        <Key text="C" onClick={() => props.onFucntionKeyPress("CLEAR")} />
        <Key text="(" onClick={props.onKeyPress} />
        <Key text=")" onClick={props.onKeyPress} />
        <Key
          text="÷"
          icon={
            <UI.Icon
              as={MaterialCommunityIcons}
              name="division"
              color="white"
              size="2xl"
            />
          }
          onClick={props.onKeyPress}
        />
        <Key text="7" onClick={props.onKeyPress} />
        <Key text="8" onClick={props.onKeyPress} />
        <Key text="9" onClick={props.onKeyPress} />
        <Key
          text="x"
          icon={
            <UI.Icon
              as={Ionicons}
              name="close-outline"
              color="white"
              size="2xl"
            />
          }
          onClick={props.onKeyPress}
        />
        <Key text="4" onClick={props.onKeyPress} />
        <Key text="5" onClick={props.onKeyPress} />
        <Key text="6" onClick={props.onKeyPress} />
        <Key
          text="-"
          icon={
            <UI.Icon as={Ionicons} name="remove" color="white" size="2xl" />
          }
          onClick={props.onKeyPress}
        />
        <Key text="1" onClick={props.onKeyPress} />
        <Key text="2" onClick={props.onKeyPress} />
        <Key text="3" onClick={props.onKeyPress} />
        <Key
          text="+"
          icon={<UI.Icon as={Ionicons} name="add" color="white" size="2xl" />}
          onClick={props.onKeyPress}
        />
        <Key text="0" onClick={props.onKeyPress} />
        <Key text="." onClick={props.onKeyPress} />
        <Key
          text="Del"
          icon={
            <UI.Icon as={Ionicons} name="backspace" color="white" size="2xl" />
          }
          onClick={() => props.onFucntionKeyPress("DELETE")}
        />
        <Key
          text="="
          hasBg
          icon={
            <UI.Icon
              as={Ionicons}
              name="reorder-two-outline"
              color="gray.800"
              size="2xl"
            />
          }
          onClick={() => props.onEvaluateAll()}
        />
      </UI.HStack>
    </UI.Box>
  );
};

const styles = StyleSheet.create({
  row: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Buttons;
