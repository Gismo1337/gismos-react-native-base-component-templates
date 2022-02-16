import React from 'react';
import Darkmode from './components/Darkmode.js';
import { Center, NativeBaseProvider, VStack } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <Darkmode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
