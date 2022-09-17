import {Tag, Badge, Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Link, Fade, ScaleFade, Slide, useDisclosure, Collapse, Container, Wrap, WrapItem} from '@chakra-ui/react';
import {ChevronDownIcon} from "@chakra-ui/icons"

function Go(){
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
        rightIcon={<ChevronDownIcon />}
        >
        Go
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
        
        <Tag m="1px"colorScheme={frameworks}>net/http(学習中)</Tag>
        
        </WrapItem>
        </Box>
        </Collapse>
        </Box>
    )

    
}

export default Go;
