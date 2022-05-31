import {ChakraProvider, Stack} from '@chakra-ui/react'
import {Heading,  Box, Tag, Center, HStack, VStack, Flex, Grid, Button, Divider} from '@chakra-ui/react';

function His2019(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2019</Heading>
        <Divider />
        <Box fontSize="lg" pl="40px" pb="5px">[湖西市×豊田高専] 共同ICT教育プロジェクト「みんなで体験！手のひらサイズのコンピュータ」 開催</Box>
        <HStack>
        <Tag ml="40px" colorScheme="blue">優秀賞</Tag>
        <Box fontSize="lg" pb="5px">第1回 システム創成コンテスト 通信システム部門 出場</Box>
        </HStack>
        <Box fontSize="lg" pl="40px" pb="5px">Yahoo HackU 2018 NAGOYA 出場</Box>
        <HStack>
        <Tag ml="40px" colorScheme="blue">第3位</Tag>
        <Box fontSize="lg" pb="5px">第26回 全国高等専門学校将棋大会 団体戦 出場</Box>
        </HStack>
        <Box fontSize="lg" pl="40px" pb="5px">第26回 全国高等専門学校将棋大会 個人戦 出場</Box>
        <Box fontSize="lg" pl="40px" pb="5px">U16 愛知プログラミング コンテスト 運営</Box>
        <Box fontSize="lg" pl="40px" pb="5px">THAILAND-JAPAN STUDENT ICT FAIR 2019 参加</Box>     
        </Stack>
    )
}

export default His2019