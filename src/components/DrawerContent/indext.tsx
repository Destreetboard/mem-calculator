import * as React from "react";
import * as UI from "native-base";
import { DrawerProps } from "@react-navigation/drawer/lib/typescript/src/types";
import { ColorThemeContext } from "../../context";
import ColorPill from "../ColorPill";

interface DrawerContentProps extends DrawerProps {}

const DrawerContent: React.FC<DrawerContentProps> = (props) => {
  const { useColor, mode, changeTheme } = React.useContext(ColorThemeContext);

  return (
    <UI.VStack
      flex={1}
      bg={useColor(
        "lightBlue.700",
        "orange.400",
        "rose.500",
        "purple.400",
        "green.600"
      )}
    >
      <UI.Box p={5}>
        <UI.Text color="white" fontSize="4xl" fontWeight="black">
          Themes
        </UI.Text>
      </UI.Box>

      <UI.HStack px={5} flexWrap="wrap">
        <ColorPill color="lightBlue.700" value="blue" onClick={changeTheme} />
        <ColorPill color="orange.400" value="yellow" onClick={changeTheme} />
        <ColorPill color="rose.500" value="rose" onClick={changeTheme} />
        <ColorPill color="purple.400" value="purple" onClick={changeTheme} />
        <ColorPill color="green.600" value="green" onClick={changeTheme} />
      </UI.HStack>
    </UI.VStack>
  );
};

export default DrawerContent;
