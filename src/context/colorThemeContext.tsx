import { ColorType } from "native-base/lib/typescript/components/types";
import * as React from "react";

const DEFAULT_MODE = "blue";

type colorThemeContextReturnType = {
  useColor: (
    blue: ColorType,
    yellow: ColorType,
    rose: ColorType,
    purple: ColorType,
    green: ColorType
  ) => ColorType;
  changeTheme: (mode: modeType) => void;
  mode: modeType;
  getStatusBarColor: () => string;
};

export const ColorThemeContext =
  React.createContext<colorThemeContextReturnType>({
    useColor: () => {
      return "blue";
    },
    changeTheme: () => {},
    mode: "blue",
    getStatusBarColor: () => "blue",
  });

interface colorThemeContextProps {
  children: any;
}

const ColorThemeContextProvider: React.FC<colorThemeContextProps> = (props) => {
  const [mode, setMode] = React.useState<modeType>(DEFAULT_MODE);

  const changeTheme = (_mode: modeType) => {
    setMode(_mode);
  };

  const getStatusBarColor = () => {
    switch (mode) {
      case "blue":
        return "#0369a1";
      case "green":
        return "#86efac";
      case "purple":
        return "#c084fc";
      case "yellow":
        return "#facc15";
      case "rose":
        return "#fda4af";
      default:
        return "#0369a1";
    }
  };

  const useColor = (
    blue: ColorType,
    yellow: ColorType,
    rose: ColorType,
    purple: ColorType,
    green: ColorType
  ): ColorType => {
    switch (mode) {
      case "blue":
        return blue;
      case "green":
        return green;
      case "purple":
        return purple;
      case "yellow":
        return yellow;
      case "rose":
        return rose;
      default:
        return blue;
    }
  };

  return (
    <ColorThemeContext.Provider
      value={{ changeTheme, useColor, mode, getStatusBarColor }}
    >
      {props.children}
    </ColorThemeContext.Provider>
  );
};

export { ColorThemeContextProvider };
