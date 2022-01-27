import { Button, Container, Box, Heading, Image, UseColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/layouts/section'
import Paragraph from '../components/layouts/paragraph'
import { BioSection , BioYear} from '../components/layouts/bio'

const Page = () =>{
 return (
     <Layout>
 <Container>
     <Box borderRdius="lg" bg={UseColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
         Hello, I'm a full stack developer based in india 
     </Box>
     <Box display={{md: 'flex'}}>
    <Box flexGrow={1}>
     <Heading as="h2" variant="page-title">
       Veer Vikramadetya  
    </Heading>  
     <p>Digital craftzaman (Developer / Editor / blockchain / Blender artist) </p>
    </Box> 
    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center" >
     <Image
      borderColor="whiteAlpha.800" 
      borderWidth={2}
       borderStyle="solid"
        maxWidth="100px" 
        display="inline-block" 
        borderRadius="full"
         src="/pages/_54Y0165.Jpg" 
         alt="Proflie image"/>
    </Box>
     </Box>

     <Section dealy={0.1}>
         <Heading as ="h3" variant="secttion-title">
             learned
         </Heading>
         <p>Vikramadetya is a student of age 14 yrs and currently learning different languages . Livinig in Hyderabad India . check out my full profile  </p>
     <Box align="center" my={4}>
       <NextLink href="/works">
           <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
            My portfolio
           </Button>
        </NextLink>  
     </Box>
     </Section>

     <Section dealy={0.2}>
        <Heading as="h3" variant="section-title" >
            Bio
        </Heading>
         <BioSection>
            <BioYear>2008</BioYear> 
            Born in India
         </BioSection>
         <BioSection>
             <BioYear>2020</BioYear>
             Started web development
         </BioSection>
         <BioSection>
             <BioYear>2021</BioYear>
             started different courses
         </BioSection>
         <BioSection>
             <BioYear>2022 to present</BioYear>
             still learning !!
         </BioSection>
     </Section>

     <Section delay={0.3}>
         <Heading as="h3" variant="section-title">
             I ♥
         </Heading>
         <Paragraph>
             code,  play, Music, phototgraphy, learning
         </Paragraph>
     </Section>
     </Container>
     </Layout>
     
    
 )
}