import {ChakraProvider, Stack} from '@chakra-ui/react'
import {Heading,  Box, Tag, Center, HStack, VStack, Flex, Grid, Button, Divider} from '@chakra-ui/react';

function His2021(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2021</Heading>
        <Divider />
        <Box fontSize="lg" pl="40px" pb="5px">豊田高専 情報工学科 木村研究室 配属</Box>
        <Box fontSize="lg" pl="40px" pb="5px">研究テーマ『手話表現中における読話認識に関する研究』</Box>
        </Stack>
    )
}

export default His2021