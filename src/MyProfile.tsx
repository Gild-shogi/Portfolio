import {ChakraProvider} from '@chakra-ui/react'
import {Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Link} from '@chakra-ui/react';
import Contact from './Contact';
import logo from './icons/gild-icon.jpg';

function MyProfile(){
    return(
      <Box w="100%" h="100%">
        <Box bg="blackAlpha.200" w="100%" h="575px">
        <Center>
          <Image
            mt="80px"
            borderRadius='full'
            boxSize='200px'
            src={logo}
            alt = './myIcon'
          />
        </Center>
        <Center>
          <Heading as="h2" mt="20px" size='4xl' color="blackAlpha.700">Gild</Heading>
        </Center>
        <Center><Heading as="h3" mt="5px" size='2xl' color="blackAlpha.600">Keito Oishi</Heading></Center>
        <Center>
          <Contact />
        </Center>
        </Box></Box>
    )
}

export default MyProfile;