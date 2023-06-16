import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        ) : null}
      </Flex>
      {isMobile && isMobileMenuOpen && (
        <Box mt={4}>
          {/* Add mobile menu items here */}
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
