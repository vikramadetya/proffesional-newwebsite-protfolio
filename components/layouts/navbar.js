
import {
    Container,
    Box,
    Link,
    stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HumburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from '../../pages/theme-toggle-button'
ThemeToggleButton
const LinkItem = ({href, path, children}) => {
    const active = path ===href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}>
               {children} 
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#ffffff40', '#20202380')}
        style={{backdropFilter: 'blur(10px'}}
        zIndex={1}
        {...props}
        >
         <Container
        display="flex" 
        p={2} 
        maxWW="container.md"
        wrap="wrap"
        align="center" 
        justify="space-between" 
        >
            <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                  <Logo />
              </Heading>  
            </Flex>

            <stack
            direction={{base: 'column', md:'row'}}
            display={{base: 'none', md: 'flex'}}
            width={{base: 'full', md: 'auto'}}
            alingItems="center"
            flexGrow={1}
            mt={{ base: 4, nmd: 0}}
            >
                <LinkItem href="/works" path={path}>
                Works
                <LinkItem href="/posts" path={path}>
                    Posts
                </LinkItem>
            </stack>
        <Box flex={1} align="right">

            <ThemeToggleButton />
            
           <Box ml={2} display={{base: 'inline-block', md:'none'}} >
              <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                </MenuButton>  
                <MenuList>
                   <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                    </NextLink> 
                </MenuList>
                <MenuList>
                   <NextLink href="/About" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                    href="/https://linktr.ee/vikramadetyaveer"
                    </NextLink> 
                </MenuList>
                
             </Menu> 
           </Box>
        
         </Container>
        </Box>
    )
     

}

export default Navbar