import React, { useState, useEffect } from 'react';
import { Container, Textarea, Button, Text, VStack } from '@chakra-ui/react';
import Tweet from './pages/twitter';
import axios from 'axios';
import Home from './pages/Home';


const App = () => {
  const [tweetText, setTweetText] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:2000/tweets')
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleTweetTextChange = (e) => {
    setTweetText(e.target.value);
  };

  const handleSubmitTweet = () => {
    axios.post('http://localhost:2000/tweets', { text: tweetText })
      .then((response) => {
        setTweets([...tweets, response.data]);
        setTweetText('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container maxW="xl" centerContent mt={8}>
      <Textarea
        placeholder="Tulis tweet Anda"
        value={tweetText}
        onChange={handleTweetTextChange}
        mb={2}
      />
      <Text>{tweetText.length}/50 karakter</Text>
      <Button
        colorScheme="twitter"
        isDisabled={tweetText.length > 50 || tweetText.length === 0}
        onClick={handleSubmitTweet}
        mt={2}
      >
        Kirim Tweet
      </Button>
      <VStack mt={4} align="stretch" spacing={4}>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </VStack>
    </Container>
  );
}

export default App;


