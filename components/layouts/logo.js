import { Text, usecolorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBAOX = styled.sapn `
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img{
    transform: rotate(20deg);
}
`

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
   
    return(
        <Link href="/">
           <a>
               <LogoBox>
                   <Image src={footPrintImg} width={20} height={20} alt="logo"/>
                   <Text
                   color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                   fontFamily='M PLUS Rounded 1c'
                   fontweight="bold"
                   ml={3}>
                    
                     Veer Vikramadetya  g
                   </Text>
               </LogoBox>
           </a> 
        </Link>
    )

}
