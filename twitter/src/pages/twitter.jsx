import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Tweet = ({ tweet }) => {
  return (
    <Box borderWidth="1px" p={4} mb={4}>
      <Text>{tweet.text}</Text>
    </Box>
  );
};

export default Tweet;
