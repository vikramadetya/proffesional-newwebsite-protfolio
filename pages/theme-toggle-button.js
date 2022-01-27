import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode,  useColorModeValue} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
 const { toggleColorMode} = useColorMode()

 return (
     <AnimatePresence exitBeforeEnter initial={false}>
     <motion.div style={{ display: 'iniline-block'}}
     ley={useColorModeValue('light', 'dark')}
     initial={{y: -20, opactiy: 0}}
     animate={{y:0, opacity:1}}
     exit={{y:2, opacity:0}}
     transition={{ duration: 0.2}}
     >
     <IconButton aria-label="Toggle theme"
     colorscheme={useColorModeValue('purpule', 'orange')
     icon={useColorModeValue(<MoonIcon />, <SunIcon />)
    onClick={toggleColorMode}>
    </IconButton>
    </motion.div>
    </AnimatePresence>
 )
}

export default ThemeToggleButton