import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "./ui/switch";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch colorPalette={"green"}/>
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
