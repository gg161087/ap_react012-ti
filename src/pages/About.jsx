import {
  VStack,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Center,
  Link as ChakraLink  
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

export const About = () => {
  return (
    <VStack w='100%' display='flex' justifyContent='center'>
      <Box
        gap='2rem'
        display='flex'
        justifyContent='center'
        p='2rem'
        m='2rem'
        w='80%'
        h='80%'>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://avatars.githubusercontent.com/u/107937050?v=4'
              alt='Gonzalo Gonzalez'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Center>
                <Heading size='md'>Gonzalo Gonzalez</Heading>
                <Text color='blue.600' fontSize='2xl'>
                  <ChakraLink href='https://github.com/gg161087' isExternal>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'>
                      <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
                    </svg>
                  </ChakraLink>
                </Text>
              </Center>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://avatars.githubusercontent.com/u/76167611?v=4'
              alt='Enzo Samojedny'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Center>
                <Heading size='md'>Enzo Samojedny</Heading>
                <Text color='blue.600' fontSize='2xl'>
                  <ChakraLink
                    href='https://github.com/enzosamojedny'
                    isExternal>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'>
                      <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
                    </svg>
                  </ChakraLink>
                </Text>
              </Center>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://avatars.githubusercontent.com/u/126734062?v=4'
              alt='Walter Daniel Gonzalez'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Center>
                <Heading size='md'>Walter Daniel Gonzalez</Heading>
                <Text color='blue.600' fontSize='2xl'>
                  <ChakraLink href='https://github.com/WDGonz' isExternal>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'>
                      <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
                    </svg>
                  </ChakraLink>
                </Text>
              </Center>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src='https://avatars.githubusercontent.com/u/127697992?v=4'
              alt='Tomas'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Center>
                <Heading size='md'>Tomas </Heading>
                <Text color='blue.600' fontSize='2xl'>
                  <ChakraLink href='https://github.com/tomas1422' isExternal>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='30'
                      height='30'
                      viewBox='0 0 30 30'>
                      <path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'></path>
                    </svg>
                  </ChakraLink>
                </Text>
              </Center>
            </Stack>
          </CardBody>
        </Card>
      </Box>
      <Box w='100%' p='2rem 0 2rem 0' display='flex' alignItems='center' justifyContent='center' bottom={0}>
        <ChakraLink as={ReactRouterLink} to='/ap_react012-ti/'> Home</ChakraLink>               
      </Box>
    </VStack>
  );
};
