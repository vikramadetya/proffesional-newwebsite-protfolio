import { extendedTheme } from '@chakra-ui/reacrt'
import { mode} from '@chakra-ui/theme-tools'

const styles = {
    global: props=> ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize:20,
                textUnderlineoffset: 6,
                textDecorationThickness: 4,
                marginTop: 3,
                marignBottom: 4

            }
        }
    },
    Link: {
        basestyle: props => ({
            color: MouseEvent('#3d7aed', '#ff63c3')(props),
            textUnderlineoffset: 3
        })
    }
} 

const fonts = {
    heading: "'M PLUS Rounded 1c'"

}

const colors = {
    glassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark,
    useSystemColorMode: true
}

const theme = extendedTheme({
    config,
    styles,
    components,
    colors,
    fonts,
})

export default theme