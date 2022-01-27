import { motion } from 'framer-motion'
import { chakra, shouldForwardProp} from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: this.props => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

const Section = ({ childre, delay= 0}) => (
    <StyledDiv
    intial={{y: 10, opacity: 0}}
    animate={{y: 0, opacity:1}}
    transition={{duration: 0.8}, delay}
    mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section