import { ChevronDownIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Collapse, Divider, Heading, HStack, Image, Link, Stack, Tag, useDisclosure, WrapItem } from '@chakra-ui/react';
import Cooklog from './image/cookri-logo.png';
import Cookscreen from './image/cookri-mobile.png';

function Enpit(){
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
        enPiT2022: cookりさん  <ChevronDownIcon/>
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
            <Heading as="h4" size="md" mt="5px" ml="30px" color="blackAlpha.800">cookりさん - レシピ検索サービス</Heading>
            <Center>
                <Link href="https://cookrisan.deta.dev" isExternal>
                <Image
                inlineSize="sm"
                alt="cookりさんロゴ"
                src={Cooklog}
                />
                </Link>
            </Center>
            <HStack pl ="30px">
                <Tag m="1px"colorScheme="yellow">スクラム開発</Tag>
                <Tag m="1px"colorScheme="blue">Python</Tag>
                <Tag m="1px"colorScheme="green">deta.sh</Tag>
            </HStack>
            <Divider color="black"></Divider>
            <HStack>
                <Box pl="40px"><Link href="https://cookrisan.deta.dev" color="blue.400" isExternal>アプリリンク<ExternalLinkIcon /></Link></Box>
                <Box pl="40px"><Link href="https://www.docswell.com/s/gild/K4DVD5-2023-01-23-125116" color="blue.400" isExternal>紹介スライド<ExternalLinkIcon /></Link></Box>
            </HStack>
            <Divider color="blue"/>
            <Box fontSize="lg" pl="40px" pb="5px"><Link href="https://enpit.coins.tsukuba.ac.jp" color="blue.400" isExternal>筑波大学enpit<ExternalLinkIcon/></Link>で行ったプロダクト開発。</Box>
            <Box fontSize="lg" pl="40px" pb="5px">≪紹介≫</Box>
            <Box fontSize="lg" pl="40px" pb="5px">「飽きず」に冷蔵庫の食材を使い切りたい自炊をするが、買い物に行くのが「面倒」を解決する「レシピ検索サービス」です。</Box>
            <Box fontSize="lg" pl="40px" pb="5px">家にない食材をはじくことで、今ある食材でバリエーションに富んだレシピを提案できます。</Box>     
            <Center>
                <Image
                inlineSize="sm"
                alt="Cookりさんイメージ"
                src={Cookscreen}
            />
            </Center>
            </Stack>
        </WrapItem>
        </Box>
        </Collapse>
        </Box>
    )
}

export default Enpit