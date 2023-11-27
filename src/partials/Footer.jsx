import { Text, Box, Link as ChakraLink  } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <Box w='100%' display='flex' alignItems='center' justifyContent='center' bottom={0}>
            <Text fontSize={'1rem'}>Todos los derechos reservados - <ChakraLink as={ReactRouterLink} to='/ap_react012-ti/about'> Grupo O</ChakraLink></Text>                
        </Box>
    )
}