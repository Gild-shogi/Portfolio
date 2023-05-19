import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Divider, Heading, HStack, Link, Stack, Tag } from '@chakra-ui/react';

function His2023(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2023</Heading>
        <Divider />
        <HStack>
        <Tag ml="40px" colorScheme="blue">プレゼン賞</Tag>
        <Box fontSize="lg" pl="2px" pb="5px">enPiT BizSysD Workshop in Iwate 参加：<Link color="blue.400" href="https://note.com/gild_coffee/n/n4f9977efb3c0" isExternal>体験レポート<ExternalLinkIcon/></Link></Box>
        </HStack>
        <HStack>
        <Tag ml="40px" colorScheme="yellow">TOKIUM賞</Tag>
        <Tag ml="40px" colorScheme="red">キョーワ賞</Tag>
        <Box fontSize="lg" pl="2px" pb="5px">アフターコロナ×AI Hackathon 参加：<Link color="blue.400" href="https://civicpower.jp/report/289/" isExternal>結果<ExternalLinkIcon/></Link></Box>
        </HStack>      
        </Stack>
    )
}

export default His2023;
