import { Text, Box, } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <Box w='100%' display='flex' alignItems='center' justifyContent='center' bottom={0}>
            <Text fontSize={'1rem'}>Todos los derechos reservados - <ReactRouterLink to='/about'> Grupo O</ReactRouterLink></Text>                
        </Box>
    )
}