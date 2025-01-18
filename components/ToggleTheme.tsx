import { useColorScheme } from "nativewind";
import { Switch } from "react-native";

const ToggleTheme = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />;
};

export default ToggleTheme;
