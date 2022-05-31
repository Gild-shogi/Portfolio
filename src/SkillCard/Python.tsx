import {Tag, Badge, Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Link, Fade, ScaleFade, Slide, useDisclosure, Collapse, Container, Wrap, WrapItem} from '@chakra-ui/react';

function Python(){
    const {isOpen, onToggle} = useDisclosure()
    const editor = "yellow"
    const frameworks="green"
    const installer="blue"
    return (
        <Box>
        <Button
        w="100%" 
        justifyContent="left" 
        onClick={onToggle}
        bg="blackAlpha.45"
        border="2px"
        borderColor="blackAlpha.300"
        >
        Python
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
        <Tag m="1px"colorScheme={editor}>VSCode</Tag>
        <Tag m="1px"colorScheme={editor}>Jupyter-Lab</Tag>
        <Tag m="1px"colorScheme={installer}>pip</Tag>
        <Tag m="1px"colorScheme={frameworks}>bottle</Tag>
        <Tag m="1px"colorScheme={frameworks}>Keras</Tag>
        </WrapItem>
        </Box>
        </Collapse>
        </Box>
    )

    
}

export default Python;
