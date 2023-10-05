import React from 'react';
import { Flex, Text, Button, Image } from '@chakra-ui/react';
import { FaApple, FaGoogle } from 'react-icons/fa'; 

const Welcome = () => {
  return (
    <Flex
      height="100vh"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        src='https://img.freepik.com/premium-vector/new-twitter-logo-x-2023-twitter-x-logo-vector-download_691560-10809.jpg?w=100'
        alt="Logo Twitter"
        boxSize="25vw"
        marginRight='30px'
      />
      <Flex flexDirection="column">
        <Text fontSize="3xl" fontWeight="bold" color="black" mb="4">
          S3D4N6 H1T5 544T 1N1
        </Text>
        <Text fontSize="2xl" fontWeight="bold" color='black' mb='3'>
          4Y0 B3RG4BUN6 B3RSAMA K4M1.!
        </Text>
        <Button
          color="Red"
          colorScheme='white'
          size="lg"
          leftIcon={<FaGoogle />}
          onClick={() => {
            console.log('Button clicked');
          }}
          borderRadius="8px"
          outlineColor='GrayText'
          marginBottom='4'
          padding='4'
        >
          Daftar dengan Google
        </Button>
        <Button
          color="black"
          colorScheme='white'
          size="lg"
          leftIcon={<FaApple />}
          onClick={() => {
            console.log('Button clicked');
          }}
          borderRadius="8px"
          outlineColor='GrayText'
          marginBottom='4'
          padding='4'
        >
          Daftar dengan Apple
        </Button>
        <Text display={"flex"} justifyContent={"center"}>
          <a href="/register" style={{ color: '#1DA1F2', textDecoration: 'underline' }}>
            <Button
              borderRadius={"2xl"}   
              colorScheme="blue"
              fontSize="1.5rem"
              padding="25px 100px"
            >
              buat akun
            </Button>
          </a>
        </Text>
        <Text 
        display={"flex"} 
        justifyContent={"center"}
        mt={"6"}
        >
            Sudah Punya akun ?
        </Text>
        <Text display={"center"} justifyContent={"center"}>
        <a href="/Login" style={{ color: '#1DA1F2', textDecoration: 'none' }}>
        <Button 
        display={"flex"}
        justifyContent={"center"}
        border={"2px"}
        borderRadius={"2xl"}
        outline={"gray"}
        colorScheme="white"
        color={"blue"}
        fontSize="1.5rem"
        padding="25px 100px"
        >
            Masuk
        </Button>
        </a >
        </Text>
      </Flex>
    </Flex>
  );
};

export default Welcome;
