import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function Register() {
  const [username, setUsername] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = () => {
    
  };

  return (
    <Box maxW="400px" mx="auto" mt="50px" p="20px" bg="white" borderRadius="5px" boxShadow="md">
      <Heading mb="4">Register</Heading>
      <FormControl mb="4">
        <FormLabel>Username</FormLabel>
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Gmail</FormLabel>
        <Input type="text" value={gmail} onChange={(e) => setGmail(e.target.value)} />
      </FormControl>
      <FormControl mb="4">
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="blue" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
}

export default Register;
