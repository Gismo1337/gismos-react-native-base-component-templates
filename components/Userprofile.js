import React from "react";
import {
    HStack,
    Avatar,
    Image,
    Center,
    Text,
    Divider,
    VStack,
    useColorMode,
    Heading
} from "native-base";

// Color Switch Component
export default function Userprofile() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Center>
            <VStack space="5">

                <Avatar size="xl" source={{
                    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                }} />

                <Text fontSize="xl">John Doe</Text>

                <Text fontSize="sm">Germany</Text>

                <Text fontSize="sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, explicabo.</Text>
                <Divider my="2" />

                <Heading fontSize="xl" pt="4">
                    User Gallery
                </Heading>

                <HStack space={4} alignItems="center" mt="4"  >
                    {["lg", "lg", "lg"].map(size => <Image key={size} size={size} resizeMode="cover" source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }} alt={"Alternate Text " + size} />)}
                </HStack>
                <HStack space={4} alignItems="center" mt="4" >
                    {["lg", "lg", "lg"].map(size => <Image key={size} size={size} resizeMode="cover" source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }} alt={"Alternate Text " + size} />)}
                </HStack>

                <HStack space={4} alignItems="center" mt="4"  >
                    {["lg", "lg", "lg"].map(size => <Image key={size} size={size} resizeMode="cover" source={{
                        uri: "https://wallpaperaccess.com/full/317501.jpg"
                    }} alt={"Alternate Text " + size} />)}
                </HStack>


                <Eventlist />




            </VStack>
        </Center>
    );
}
