import {ChakraProvider, Stack} from '@chakra-ui/react'
import {Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Divider,  useDisclosure, Collapse, WrapItem, Tag} from '@chakra-ui/react';
import RApp from './image/TrabelApp.png';

function R_Hack2022(){
    const {isOpen, onOpen, onToggle} = useDisclosure({ defaultIsOpen: true })
    return(
        <Box>
        <Button
        w="100%" 
        justifyContent="left" 
        onClick={onToggle}
        bg="blackAlpha.45"
        border="2px"
        borderColor="blackAlpha.300"
        >
        R-Hack: トマレルApp
        </Button>
        <Collapse in={isOpen} animateOpacity>
        <Box
            as="span"
            p="100%"
            h="100%"
            bg="blackAlpha.100"
            mt="20px"
            rounded="md"
            shadow="md"
        >
        <WrapItem>
            <Stack>
            <Heading as="h4" size="md" mt="5px" ml="30px" color="blackAlpha.800">トマレルApp - 簡単に現在地付近のホテルを検索・予約ができるサービス</Heading>
            <HStack pl ="30px">
                <Tag m="1px"colorScheme="yellow">チーム開発</Tag>
                <Tag m="1px"colorScheme="blue">React</Tag>
                <Tag m="1px"colorScheme="green">楽天トラベルAPI</Tag>
            </HStack>
            <Divider color="blue"/>
            <Box fontSize="lg" pl="40px" pb="5px">楽天エンジニアインターン時に6人チームで作成した楽天トラベルAPIを使用した宿検索アプリケーション</Box>
            <Box fontSize="lg" pl="40px" pb="5px">アクセスと同時にユーザの現在地を取得して現在地付近のホテルを検索、プランと距離、値段を表示する。</Box>
            <Box fontSize="lg" pl="40px" pb="5px">金額と距離によってホテルの絞り込みも行うことが出来る</Box>     
            <Center>
                <Image
                inlineSize="sm"
                alt="TomarelApp-Image"
                src={RApp}
            />
            </Center>
            </Stack>
        </WrapItem>
        </Box>
        </Collapse>
        </Box>
    )
}

export default R_Hack2022