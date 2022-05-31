import React from 'react';
import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import {Stack, Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button,} from '@chakra-ui/react';
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
    <Stack>
              
      <Box w="100%" h="50px">
      </Box>
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
  );
}

export default App;
