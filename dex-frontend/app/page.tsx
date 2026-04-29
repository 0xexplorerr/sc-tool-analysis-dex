'use client';

import { Flex } from '@mantine/core';
import WidthContainer from '@/components/containers/WidthContainer';
import { Swap } from '@/components/pages/home/swap';

export default function HomePage() {
  return (
    <WidthContainer>
      <Flex mih="90vh" justify="center" direction="column" w="100%">
        <Swap />
      </Flex>
    </WidthContainer>
  );
}
