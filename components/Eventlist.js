import React from "react";
import {
    Text,
    HStack,
    Heading,
    Box,
    Center,
    FlatList,
    Avatar,
    ScrollView,
    Spacer,
    VStack
} from "native-base";

export default Eventlist = (props) => {
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Sebastian und Jennifer Hochzeit",
        timeStamp: "08.06.2012 - 13:37 Uhr",
        recentText: "Best Day Ever",
        destination: "Lettstreet 13, 37133 Leetland",
        picturesSum: "13",
        guests: "37",
        likes: "1337",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "FCB : BVB",
        timeStamp: "08.06.2012 - 13:37 Uhr",
        destination: "Lettstreet 13, 37133 Leetland",
        picturesSum: "13",
        guests: "37",
        likes: "1337",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "08.06.2012 - 13:37 Uhr",
        destination: "Lettstreet 13, 37133 Leetland",
        picturesSum: "13",
        guests: "37",
        likes: "1337",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "08.06.2012 - 13:37 Uhr",
        destination: "Lettstreet 13, 37133 Leetland",
        picturesSum: "13",
        guests: "37",
        likes: "1337",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "08.06.2012 - 13:37 Uhr",
        destination: "Lettstreet 13, 37133 Leetland",
        picturesSum: "13",
        guests: "37",
        likes: "1337",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];
    return <Box>
        <Heading fontSize="xl" p="4" pb="3">
            Visited Events
        </Heading>
        <FlatList data={data} renderItem={({
            item
        }) => <Box borderBottomWidth="1" _dark={{
            borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                    <Avatar mt="4" size="48px" source={{
                        uri: item.avatarUrl
                    }} />
                    <VStack>
                        <Text fontSize="xs" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start">
                            {item.timeStamp}
                        </Text>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.fullName}
                        </Text>

                        <Text fontSize="xs" _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" alignSelf="flex-start">
                            {item.destination}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.recentText}
                        </Text>


                    </VStack>
                    <Spacer />
                </HStack>
                <Center>
                    <HStack space={10} justifyContent="space-between">

                        <VStack >
                            <Center>
                                <Text fontSize="lg">{item.picturesSum}</Text>
                                <Text fontSize="xs">Pictures</Text>
                            </Center>

                        </VStack>
                        <VStack >
                            <Center>
                                <Text fontSize="lg">{item.guests}</Text>
                                <Text fontSize="xs">Guests</Text>
                            </Center>

                        </VStack>
                        <VStack >
                            <Center>
                                <Text fontSize="lg">{item.likes}</Text>
                                <Text fontSize="xs">Likes</Text>
                            </Center>
                        </VStack>

                    </HStack>
                </Center>
            </Box>
        } keyExtractor={item => item.id} />
    </Box >

};