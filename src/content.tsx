import {ChakraProvider} from '@chakra-ui/react'
import {Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Link} from '@chakra-ui/react';
import React, {FC} from 'react'

function Content(props:any){
    return(
        <Box w="100%" h="50px" bg="blackAlpha.400">
        <Heading as="h3" mt="5px" ml="30px" size="xl" color="blackAlpha.700">{props.name}</Heading>
      </Box>
    )
}

export default Content;