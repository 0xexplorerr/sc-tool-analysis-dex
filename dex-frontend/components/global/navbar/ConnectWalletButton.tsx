import React from 'react';
import { disconnect } from '@wagmi/core';
import { Connector, useAccount, useConnect } from 'wagmi';
import { Button, Flex, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { config } from '@/config';

export const ConnectWalletButton = () => {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();
  const [opened, { open, close }] = useDisclosure(false);

  const handleButton = async () => {
    if (address) {
      disconnect(config);
    } else {
      open();
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Connect Wallet"
        styles={{
          header: { backgroundColor: '#161616', color: 'white' },
          content: { backgroundColor: '#161616', color: 'white' },
        }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <Flex direction="column" gap="md">
          {connectors.map((connector: Connector) => (
            <Button
              onClick={() => {
                connect({ connector });
                close();
              }}
            >
              {connector.name}
            </Button>
          ))}
        </Flex>
      </Modal>

      <Button color="indigo" variant="outline" onClick={handleButton}>
        {address ? `${address?.slice(0, 5)}...${address.slice(-5)}` : 'Connect Wallet'}
      </Button>
    </>
  );
};
