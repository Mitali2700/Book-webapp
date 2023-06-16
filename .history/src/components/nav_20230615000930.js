// src/components/Navbar.js
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Handle search logic here
    console.log('Search value:', searchValue);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="#7B2869" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold" color="white">
          MyBook
        </Text>
        {isMobile ? (
          <IconButton
            aria-label="Toggle menu"
            icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleMobileMenuToggle}
            color="#7B2869"
          />
        ) : (
          <InputGroup maxW="sm">
            <Input
              placeholder="Search book"
              value={searchValue}
              onChange={handleSearchInputChange}
              color="white"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<SearchIcon />}
                onClick={handleSearchSubmit}
              />
            </InputRightElement>
          </InputGroup>
        )}
      </Flex>
      {isMobile && isMobileMenuOpen && (
        <Box mt={4}>
          <InputGroup maxW="sm">
            <Input
              placeholder="Search book"
              value={searchValue}
              onChange={handleSearchInputChange}
              color="white"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                color="white"
                icon={<SearchIcon />}
                onClick={handleSearchSubmit}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
