import { Image, Box } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'


export const Header = () => {
    return (
        <Box w='100%' p='2rem 0 2rem 0' display='flex' alignItems='center' justifyContent='center'>
            <Box w='80%' display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <Image src='/checklist-two-color.png' w='10rem'></Image>
                </Box>
                <Box display='flex' alignItems='center'>
                    <ChakraLink as={ReactRouterLink} to='/about' p='2rem'>ABOUT</ChakraLink>  
                    <ChakraLink as={ReactRouterLink}  to='/' p='2rem'>HOME</ChakraLink>
                </Box>
            </Box>
        </Box>
    )
}