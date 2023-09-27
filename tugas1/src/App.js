import React from 'react';
import TodoList from './page/TodoList';
// import { ChakraProvider, extendTheme } from '@chakra-ui/react';


// const theme = extendTheme({
//   // Atur tema Chakra UI di sini jika diperlukan
// });

function App() {
  return (
    // <ChakraProvider theme={theme}>
      <TodoList />
    // </ChakraProvider>
  );
}

export default App;