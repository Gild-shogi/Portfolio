import { Stack } from '@chakra-ui/react';
import Enpit from './Products/enpit';
import R_Hack2022 from './Products/R_Hack2022';

function Products(){
    return(
        <Stack>
            <R_Hack2022 />
            <Enpit />
        </Stack>
    )
}

export default Products