import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container, Textarea, Text, Button, VStack } from "@chakra-ui/react";

function Chattwit() {
  const [chattwitText, setChattwitText] = useState("");
  const [tweets, setTweets] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:2000/chattwit")
      console.log(data);
      setTweets(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, []);

  const handleChattwitTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= 50) {
      setChattwitText(newText);
    }
  };

  const handleSubmitChattwit = async () => {
    setIsSubmitting(true); 
    try {
      const response = await axios.post("http://localhost:2000/chattwit", {
        text: chattwitText,
      });
      console.log(response.data);
      getData(); 
      setChattwitText(""); 
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
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
        isDisabled={chattwitText.length > 50 || chattwitText.length === 0 || isSubmitting}
        onClick={handleSubmitChattwit}
        mt={2}
      >
        Kirim Chattwit
      </Button>
      {tweets.map((item) => {
        return (
          <Text>{item.id}</Text>
        )
      })}
    </Container>
  );
}

export default Chattwit;

