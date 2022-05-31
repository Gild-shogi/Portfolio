import {ChakraProvider} from '@chakra-ui/react'
import {Heading,  Box, Image, Center, HStack, VStack, Flex, Grid, Button, Link} from '@chakra-ui/react';

import github from './icons/GitHub-Mark-64px.png';
import twitter from "./icons/TwitterB.png"
import fb from "./icons/fb.png"

function Contact(){
    return(
        <HStack>
        <Link href="https://github.com/Gild-shogi">
        <Image
          m="30px"
          src={github}
          alt="githubLink"
        /></Link>
        <Link href="https://twitter.com/Gild_prog">
        <Image
          m="30px"
          src={twitter}
          alt="twitterLink"
          boxSize="64px"
          ></Image>
        </Link>
        <Link href="https://www.facebook.com/KeitoOishi/">
          <Image
            m="30px"
            src={fb}
            alt="facebookLink"
            boxSize="64px"
            />
        </Link>
      </HStack>
    )
}

export default Contact;