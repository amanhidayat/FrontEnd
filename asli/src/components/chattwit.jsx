import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Textarea, Text, Button, VStack } from "@chakra-ui/react";

function Chattwit() { 
  const [chattwitText, setChattwitText] = useState(''); 
  const [chattwits, setChattwits] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:3000/chattwits') 
      .then((response) => {
        setChattwits(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChattwitTextChange = (e) => { 
    const newText = e.target.value;
    if (newText.length <= 50) {
      setChattwitText(newText);
    }
  };

  const handleSubmitChattwit = () => { 
    axios.post('http://localhost:3000/chattwits', { text: chattwitText }) 
      .then((response) => {
        setChattwits([...chattwits, response.data]);
        setChattwitText('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container maxW="xl" centerContent mt={8}>
      <Textarea
        placeholder="Tulis chattwit Anda" 
        value={chattwitText} 
        onChange={handleChattwitTextChange} 
        mb={2}
      />
      <Text>{chattwitText.length}/50 karakter</Text>
      <Button
        colorScheme="twitter"
        isDisabled={chattwitText.length > 50 || chattwitText.length === 0} 
        onClick={handleSubmitChattwit} 
        mt={2}
      >
        Kirim Chattwit
      </Button>
      <VStack mt={4} align="stretch" spacing={4}>
        {chattwits.map((chattwit) => ( 
          <Chattwit key={chattwit.id} chattwit={chattwit} /> 
        ))}
      </VStack>
    </Container>
  );
}

export default Chattwit; 

