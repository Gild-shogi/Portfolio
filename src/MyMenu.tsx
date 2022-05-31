import { 
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    Flex,
    Link,
    MenuDivider,} from '@chakra-ui/react';
    import { Link as Scroll } from 'react-scroll';

function MyMenu(){
    return(
        <Flex as="nav">
        <Box h="10px" top={0} position={"sticky"}/>
        <Menu>
        <MenuButton as={Button} colorScheme='gray'>
            Menu
        </MenuButton>
        <MenuList>
            <MenuGroup title=''>
            <MenuItem><Scroll to="Skills">Skills</Scroll> </MenuItem>
            <MenuItem><Scroll to="History">History</Scroll>  </MenuItem>
            <Scroll to="Products"><MenuItem>Products  </MenuItem></Scroll>
            </MenuGroup>
        </MenuList>
        </Menu>
        </Flex>
    )
}
export default MyMenu