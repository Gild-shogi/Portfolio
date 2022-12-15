import React from 'react';
import {ChakraProvider, Spacer} from '@chakra-ui/react'
import {Stack, Heading,  Box, Image, Link, HStack, VStack, Flex, Grid, Button} from '@chakra-ui/react';
import MyProfile from './MyProfile'
import Content from './content'
import History from './History';

import { Link as Scroll } from 'react-scroll';
import Python from './SkillCard/Python';
import JS from "./SkillCard/JS";
import Go from "./SkillCard/Go";
import Products from './Products';

function App() {

  return (
    <Box>
    <HStack as="header" top={0} overflow="unset" position="sticky" bg="white">
      <Link href="#Skills"><Button>Skills</Button></Link>
      <Link href="#History"><Button>History</Button></Link>
      <Link href="#Products"><Button>Product</Button></Link>
      <Spacer />
      <Link className="microtask repeat" href="//crowd4u.org">
        <Image src="//crowd4u.org/img/crowd4u_banner182x47.png"/>
      </Link>
      </HStack>
    <Stack>

      <MyProfile/>
      <Content name="Skills" id="Skills"/>    
      <Python />
      <JS />
      <Go />
      <Content name="History" id="History"/>
      <History />
      <Content name="Products" id="Products"/>
      <Products />
      
    </Stack>
    </Box>
  );
}

export default App;
