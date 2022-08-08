import type { NextPage } from 'next';
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

        <Box mb='5' mt='20' css={{
          '.swiper': {
            width: 1240,
            height: 450,
          },
          '.swiper-slide': {
            textAlign: 'center',
            fontSize: '18px',
            display: '-webkit-box',   
            WebkitBoxPack: 'center',
            msFlexPack: 'center',
            WebkitJustifyContent: 'center',
            justifyContent: 'center',
            WebkitBoxAlign: 'center',
            msFlexAlign: 'center',
            WebkitAlignItems: 'center',
            alignItems: 'center',
          },
          '.swiper-slide img': {
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          },
          '.swiper-button-prev': {
            color: '#FFBA08',
          },
          '.swiper-button-next': {
            color: '#FFBA08',
          },
          '.swiper-pagination-bullet': {
            background: '#999999'
          },
          '.swiper-pagination-bullet-active': {
            background: '#FFBA08'
          }
        }}>
          <Swiper 
            cssMode={true}
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Flex width='100%' h='100%' backgroundImage='images/europa.png' align='center' justify='center' direction='column'>
                <Text fontWeight='bold' color='gray.100' fontSize='48'>Europa</Text>
                <Text fontWeight='bold' color='gray.100'>O continente mais antigo.</Text>
              </Flex>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home
