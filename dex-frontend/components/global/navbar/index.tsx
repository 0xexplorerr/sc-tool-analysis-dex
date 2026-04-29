'use client';

import Link from 'next/link';
import { Flex, Title, useMantineTheme } from '@mantine/core';
import WidthContainer from '@/components/containers/WidthContainer';
import { ConnectWalletButton } from './ConnectWalletButton';

const navLinks = [
  { label: 'Swap', href: '/' },
  { label: 'Pool', href: '/pool' },
];

const Navbar = () => {
  const theme = useMantineTheme();

  return (
    <Flex h="60px" bg={theme.colors.dark[7]} w="100%">
      <WidthContainer>
        <Flex w="100%" align="center" justify="space-between">
          <Link
            href="/"
            style={{ color: theme.white, fontWeight: 700, fontSize: 20, textDecoration: 'none' }}
          >
            <Title order={2} c="indigo">
              SimpleDEX
            </Title>
          </Link>

          <Flex justify="space-between" align="center" gap="md">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{ color: theme.white, textDecoration: 'none', fontSize: 16 }}
              >
                {link.label}
              </Link>
            ))}
            <ConnectWalletButton />
          </Flex>
        </Flex>
      </WidthContainer>
    </Flex>
  );
};

export default Navbar;
