import './App.css';
import Nav from './components/nav'
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';

  ReactDOM.render(
    <ChakraProvider>
    <div>
      <Nav/>
    </div>
  );


export default App;
