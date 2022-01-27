import Head from 'next/Head'
import Navbar from '../navbar.js'
import noSsr from './no-ssr.js'
import { Box, Container} from '@chakra-ui/react'
import myRoom from './my-room.js'

const Main = ({ children, router}) => {
    return (
      <Box as="main" pb={8}>
         <Head>
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <Title>Veer Vikramadetya goud - Homepage</Title>
          </Head> 

          <Navbar path={router.asPath} />

          <Container maxW="container,md" pt={14}>
              <noSsr>
              <my-room />
              </noSsr>
              {children}

          </Container>
      </Box>  
    )
}