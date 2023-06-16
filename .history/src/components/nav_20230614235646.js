// import React from 'react'

// const Nav = () => {
//   return (
//     <h1>nav</h1>
//   )
// }

// export default Nav
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');
  
    const handleSearchInputChange = (event) => {
      setSearchValue(event.target.value);
    };
  
    const handleSearchSubmit = () => {
      // Handle search logic here
      console.log('Search value:', searchValue);
    };
  
    return (
      <Box bg="blue.500" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="xl" fontWeight="bold" color="white">
            MyBook
          </Text>
          <InputGroup maxW="sm">
            <Input
              placeholder="Search book"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                onClick={handleSearchSubmit}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
  