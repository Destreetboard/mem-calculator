import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import Navigation from "./src/navigation";
import { ColorThemeContextProvider } from "./src/context";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" translucent={false} />
      <ColorThemeContextProvider>
        <Navigation />
      </ColorThemeContextProvider>
    </NativeBaseProvider>
  );
}
