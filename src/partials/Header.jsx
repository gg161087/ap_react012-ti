import { Image, Box, Button } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      w='100%'
      p='2rem 0 2rem 0'
      display='flex'
      alignItems='center'
      justifyContent='center'>
      <Box w='80%' display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>
          <Image src='/checklist-two-color.png' w='10rem'></Image>
        </Box>
        <Box display='flex' alignItems='center' gap='10px'>
          <Box
            as='button'
            height='24px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='5px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#f5f6f7'
            borderColor='#ccd0d5'
            color='#4b4f56'
            _hover={{ bg: "#ebedf0" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}>
            <ChakraLink as={ReactRouterLink} to='/' p='2rem'>
              HOME
            </ChakraLink>
          </Box>
          <Box
            as='button'
            height='24px'
            lineHeight='1.2'
            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
            border='1px'
            px='8px'
            borderRadius='5px'
            fontSize='14px'
            fontWeight='semibold'
            bg='#f5f6f7'
            borderColor='#ccd0d5'
            color='#4b4f56'
            _hover={{ bg: "#ebedf0" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}>
            <ChakraLink as={ReactRouterLink} to='/about' p='2rem'>
              ABOUT
            </ChakraLink>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
