import {ChakraProvider, Stack} from '@chakra-ui/react'
import {Heading,  Box, Tag, Center, HStack, VStack, Flex, Grid, Button, Divider} from '@chakra-ui/react';

function His2022(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2022</Heading>
        <Divider />
        <Box fontSize="lg" pl="40px" pb="5px">国立 豊田高等専門学校 情報工学科 卒業</Box>
        <Box fontSize="lg" pl="40px" pb="5px">国立 筑波大学 情報学群 知識情報・図書館学類 知識情報システム主専攻 編入学</Box>
        </Stack>
    )
}

export default His2022