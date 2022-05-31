import {ChakraProvider, Stack} from '@chakra-ui/react'
import {Heading,  Box, Tag, Center, HStack, VStack, Flex, Grid, Button, Divider} from '@chakra-ui/react';

function His2020(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2020</Heading>
        <Divider />
        <Box fontSize="lg" pl="40px" pb="5px">豊田高専 コンピュータ部 部長就任(2020.4~2021.3)</Box>
        <Box fontSize="lg" pl="40px" pb="5px">豊田高専 囲碁将棋部 部長就任(2020.10~2021.9)</Box>
        </Stack>
    )
}

export default His2020