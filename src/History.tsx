import {ChakraProvider} from '@chakra-ui/react'
import {Stack, Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Link} from '@chakra-ui/react';
import His2017 from './MyHistory/His2017';
import His2018 from './MyHistory/His2018';
import His2019 from './MyHistory/His2019';
import His2020 from './MyHistory/His2020';
import His2021 from './MyHistory/His2021';
import His2022 from './MyHistory/His2022';

function History(){
    return(
        <Stack>
            <His2017 />
            <His2018 />
            <His2019 />
            <His2020 />
            <His2021 />
            <His2022 />
        </Stack>
    )
}

export default History