import React from 'react';
import Darkmode from './components/Darkmode.js';
import Appstart from './components/Appstart.js';


import { Avatar, ScrollView, Center, Image, Divider, Heading, Text, Button, NativeBaseProvider, HStack, VStack } from 'native-base';
import Eventlist from './components/Eventlist.js';
import Userprofile from './components/Userprofile.js';


export default function App() {
  return (

    <NativeBaseProvider>

      <VStack space="5">
        <Darkmode />


        <Divider my="2" />

        <Appstart />

        <Divider my="2" />

        <Userprofile />
      </VStack>






    </NativeBaseProvider>

  );
}

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
