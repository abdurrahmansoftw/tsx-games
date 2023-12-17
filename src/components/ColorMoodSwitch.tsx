import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorMoodSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme='green' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace='nowrap'> Dark Mood</Text>
    </HStack>
  );
};

export default ColorMoodSwitch;
