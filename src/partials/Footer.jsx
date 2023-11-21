import { Text, Box, UnorderedList, ListItem, Image} from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

export const Footer = () => {
    return (
        <Box w='100%' p='2rem 0 2rem 0' display='flex' alignItems='center' justifyContent='center'>
            <Box w='80%' display='flex' justifyContent='space-between'>
                <Box display='flex' alignItems='center'>
                    <UnorderedList>
                        <ListItem>
                            <ChakraLink as={ReactRouterLink}  to='/'>HOME</ChakraLink>
                        </ListItem>
                        <ListItem>
                            <ChakraLink as={ReactRouterLink} to='/about'>ABOUT</ChakraLink> 
                        </ListItem>
                    </UnorderedList>
                </Box>
                <Box display='flex' alignItems='center'>
                    <Image src='/checklist-two-color.png' w='10rem'></Image>                    
                </Box>
            </Box>
        </Box>
    )
}