import { Divider, Flex, Text } from '@mantine/core';
import WidthContainer from '@/components/containers/WidthContainer';

const Footer = () => (
  <WidthContainer>
    <Flex align="center" justify="center" py="md" direction="column" gap="md" w="100%">
      <Divider color="#909090" w="100%" />
      <Text size="sm">©2025 - Patryk Rossa</Text>
    </Flex>
  </WidthContainer>
);

export default Footer;
