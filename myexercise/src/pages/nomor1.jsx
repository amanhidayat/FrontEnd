import React, { useState } from "react";
import { ChakraProvider, Box, Button, Text, VStack } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IconNam } from '@chakra-ui/icons';

function Nomor1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <ChakraProvider>
      <VStack spacing={4} align="center">
        
        <Box display="flex" justifyContent="center" alignItems="center" m={5} p={10} border="8px" backgroundColor={"black"} borderRadius={"8px"}>
        <Button colorScheme="red" m={5} p={5} onClick={decrement}>
            <MinusIcon boxSize={6} />
          </Button>
          <Text fontSize="5xl" color={"white"}> {count}</Text> 
          <Button colorScheme="teal" m={5} p={5} onClick={increment}>
          <AddIcon boxSize={6} />
          </Button>
          
        </Box>
      </VStack>
    </ChakraProvider>
  );
}

export default Nomor1;