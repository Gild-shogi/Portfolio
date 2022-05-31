import {ChakraProvider, Stack} from '@chakra-ui/react'
import {Heading,  Box, Tag, Center, HStack, VStack, Flex, Grid, Button, Divider} from '@chakra-ui/react';

function His2018(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2018</Heading>
        <Divider />
        <HStack>
        <Tag ml="40px" colorScheme="green">敢闘賞</Tag>
        <Box fontSize="lg" pb="5px">第5回 高専生向け NI myRIO組込システム 開発コンテスト 出場</Box>
        </HStack>
        <Box fontSize="lg" pl="40px" pb="5px">NIT Toba Hackation出場</Box>
        <Box fontSize="lg" pl="40px" pb="5px">Yahoo HackU 2018 NAGOYA 出場</Box>
        <Box fontSize="lg" pl="40px" pb="5px">第25回 全国高等専門学校将棋大会 個人戦 出場</Box>
        <Box fontSize="lg" pl="40px" pb="5px">高専カンファレンスin名古屋 2018 参加</Box>
        <HStack>
        <Tag ml="40px" colorScheme="orange">企業賞</Tag>
        <Box fontSize="lg" pb="5px">第29回 全国高等専門学校 プログラミングコンテスト 課題部門 出場</Box>
        </HStack>
        </Stack>
    )
}

export default His2018