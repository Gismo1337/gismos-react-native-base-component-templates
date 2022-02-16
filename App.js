import React from 'react';
import Darkmode from './components/Darkmode.js';
import Appstart from './components/Appstart.js';
import { Center, Image, Divider, Heading, Text, Button, NativeBaseProvider, HStack, VStack } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        px={4}
        flex={1}>

        <Darkmode />


        <Divider my="2" />

        <Appstart />

        <Divider my="2" />
      </Center>
    </NativeBaseProvider>
  );
}

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
