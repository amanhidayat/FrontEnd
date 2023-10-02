import React, { useState, useEffect } from 'react';
import { ChakraProvider, VStack, Box, Text, HStack, Button } from "@chakra-ui/react";

function Nomor2() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <ChakraProvider>
      <VStack spacing={4} align="center">
        <Box borderRadius="10px" width="60vh" height="180px" backgroundColor="black" alignItems="center" justifyContent="center">
          <Text fontSize="6xl" color="white" fontWeight="bold">
            {formatTime(time)}
          </Text>
          <HStack spacing={4} justifyContent="center" m={5}>
            <Button colorScheme="green" onClick={startTimer}>
              Start
            </Button>
            <Button colorScheme="red" onClick={stopTimer}>
              Stop
            </Button>
            <Button colorScheme="yellow" onClick={resetTimer}>
              Reset
            </Button>
          </HStack>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default Nomor2;