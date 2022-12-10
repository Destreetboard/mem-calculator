import * as React from "react";
import { Box, Icon, Pressable, VStack } from "native-base";
import { ColorThemeContext } from "../../context";
import Buttons from "../../components/Buttons";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import ScreenDisplay from "../../components/ScreenDisplay";
import { preformat, removeLastStringChar } from "../../utils";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { useColor, getStatusBarColor } = React.useContext(ColorThemeContext);
  const [eqn, setEqn] = React.useState("");
  const [ans, setAns] = React.useState("");

  const handleChangeEqn = (value: string) => {
    setAns((prev) => {
      if (prev == "0" && value == "0") {
        return prev;
      }
      return prev + value;
    });
  };

  const handleEvaluateAnswer = () => {
    const formated = preformat(ans);
    setEqn(ans);
    setAns(eval(formated));
  };

  const handleFunctions = (fn: fnType) => {
    switch (fn) {
      case "DELETE":
        deleteEqn();
        break;
      case "CLEAR":
        clearScreen();
        break;
    }
  };

  const clearScreen = () => {
    setEqn("");
    setAns("");
  };

  const deleteEqn = () => {
    const newVal = removeLastStringChar(ans);
    setAns(newVal);
  };

  const getAnswerPreview = () => {
    try {
      const formated = preformat(ans);
      return eval(formated);
    } catch (e) {
      return ans;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={getStatusBarColor()} translucent={false} />
      <VStack flex={1}>
        <Box
          h="1/2"
          bgColor={useColor(
            "lightBlue.700",
            "yellow.400",
            "rose.300",
            "purple.400",
            "green.300"
          )}
          shadow={3}
        >
          <Box p={3}>
            <Pressable onPress={() => navigation.openDrawer()}>
              <Icon as={Ionicons} name="menu" color="white" size="4xl" />
            </Pressable>
          </Box>
          <VStack
            flex={1}
            justifyContent="flex-end"
            p={5}
            alignItems="flex-end"
          >
            {/* <ScreenDisplay equ="1+2/3*4" ans="0.32423" />
            <ScreenDisplay equ="1+2/3*4" ans="0.32423" />
            <ScreenDisplay equ="1+2/3*4" ans="0.32423" /> */}
            <ScreenDisplay equ={eqn} ans={ans} preview={getAnswerPreview()} />
          </VStack>
        </Box>
        <Box
          h="1/2"
          bgColor={useColor(
            "darkBlue.900",
            "orange.400",
            "rose.500",
            "purple.900",
            "green.500"
          )}
        >
          <Buttons
            onEvaluateAll={handleEvaluateAnswer}
            onFucntionKeyPress={handleFunctions}
            onKeyPress={handleChangeEqn}
          />
        </Box>
      </VStack>
    </>
  );
};

export default HomeScreen;
