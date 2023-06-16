// import React from 'react'

// const footer = () => {
//   return (
//     <h1>footer</h1>
//   )
// }

// export default footer

import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="#7B2869" p={4}>
      <Flex justify="center" align="center">
        <Text fontSize="sm" color="white">© 2023 Your Company. All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Footer;