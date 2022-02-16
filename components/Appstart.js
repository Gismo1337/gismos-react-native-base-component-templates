import React from "react";
import {
  Text,
  HStack,
  Heading,
  Image,
  Button,
  Center,
  VStack
} from "native-base";

// Appstart Component
export default function Appstart() {
  return (

    <VStack space="5">
      <Center>
        <Image size={150} resizeMode={"contain"} borderRadius={300} source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg"
        }} alt="Alternate Text" />


        <HStack space="3" alignItems="center">

          <Heading>Component</Heading>


          <Text fontSize="md">Base</Text>

        </HStack>

        <Button size="lg">
          Login
        </Button>
        <Button size="lg" variant="outline">
          Signup
        </Button>
      </Center>
    </VStack>
  );
}