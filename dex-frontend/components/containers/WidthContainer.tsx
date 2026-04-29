import React, { ReactNode } from 'react';
import { Flex } from '@mantine/core';

const WidthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex mx="auto" px="md" dir="column" maw="1400px" w="100%" style={{ overflow: 'hidden' }}>
      {children}
    </Flex>
  );
};

export default WidthContainer;
