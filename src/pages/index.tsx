import type { NextPage } from 'next';
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <Flex direction='column' h='100vh'>
      <Header/>

      <Flex 
        h={335} 
        backgroundImage="homebg.png" 
        backgroundRepeat='no-repeat'
        align='center'
        justify='space-around'
        mt='5'
      >
        <Flex maxW={426} h={108} direction='column' align='center'>
          <Text fontSize='36' fontWeight={500} color='white'>
            5 Continentes,<br/>
            infinitas possibilidades.
          </Text>
          <Text color='lightInfo' mt='8'>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>

        <Box mt={115}>
            <Image src='airplane.png' alt='Imagem de um avião' />
        </Box>
      </Flex>

      <Flex direction='column' align='center' mt='8rem'>
        <Flex direction='row' w={1160} h={145} align='center' justify='space-between'>
          <Image src='nightlife.svg' />
          <Image src='beach.svg' />
          <Image src='modern.svg' />
          <Image src='classic.svg' />
          <Image src='more.svg' />
        </Flex>

        <Divider my='20'borderColor='darkHeadings' width={90} border={4} variant='solid' />

        <Text color='darkHeadings' fontSize='36' textAlign='center'>
          Vamos Nessa? <br/>
          Então escolha seu continente
        </Text>


      </Flex>
    </Flex>
  )
}

export default Home
