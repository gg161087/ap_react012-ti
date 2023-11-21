import { Text, Box, } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <Box w='100%' p='2rem 0 2rem 0' display='flex' alignItems='center' justifyContent='center'>
            <Text>Todos los derechos reservados - Grupo O</Text>
        </Box>
    )
}