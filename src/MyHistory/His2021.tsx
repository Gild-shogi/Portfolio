import { Box, Divider, Heading, Link, Stack } from '@chakra-ui/react';

function His2021(){
    return(
        <Stack>
        <Heading as="h4"  size="lg" mt="5px" ml="30px" color="blackAlpha.600">2021</Heading>
        <Divider />
        <Box fontSize="lg" pl="40px" pb="5px">豊田高専 情報工学科 木村研究室 配属</Box>
        <Box fontSize="lg" pl="40px" pb="5px">研究テーマ『手話表現中における読話認識に関する研究』（『<Link color="blue.400" href="https://kanda-arc.net/sca2020/" isExternal>手話コミュニケーション研究会 論文集 2020-2021 合併号</Link>』掲載）</Box>
        </Stack>
    )
}

export default His2021