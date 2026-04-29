'use client';

import { useEffect, useState } from 'react';
import { createPublicClient, createWalletClient, encodeFunctionData, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { useSendTransaction } from 'wagmi';
import { Button, Flex, Title } from '@mantine/core';
import WidthContainer from '@/components/containers/WidthContainer';
import { localhost } from '@/config';
import { contractAbi, contractAddress, tokenAbi, tokens } from '@/consts';
import { SwapInput } from './SwapInput';

export const Swap = () => {
  const { sendTransaction } = useSendTransaction();

  const [inputTokenValue, setInputTokenValue] = useState<number | string>(0);
  const [inputToken, setInputToken] = useState<string | null>('ETH');

  const [outputTokenValue, setOutputTokenValue] = useState<number | string>(0);
  const [outputToken, setOutputToken] = useState<string | null>(null);
  const client = createPublicClient({ transport: http('http://localhost:8545') });
  const account = privateKeyToAccount(
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'
  );

  const walletClient = createWalletClient({
    chain: localhost,
    account,
    transport: http('http://localhost:8545'),
  });

  const addLiquidity = async () => {
    await walletClient.sendTransaction({
      to: tokens.TKNA.address as `0x${string}`,
      data: encodeFunctionData({
        abi: tokenAbi,
        functionName: 'approve',
        args: [contractAddress, BigInt(1000 * 10 ** 18)],
      }),
    });

    await walletClient.sendTransaction({
      to: tokens.TKNB.address as `0x${string}`,
      data: encodeFunctionData({
        abi: tokenAbi,
        functionName: 'approve',
        args: [contractAddress, BigInt(1000 * 10 ** 18)],
      }),
    });

    await walletClient.sendTransaction({
      to: contractAddress,
      data: encodeFunctionData({
        abi: contractAbi,
        functionName: 'addLiquidity',
        args: [BigInt(10 * 10 ** 18), BigInt(10 * 10 ** 18)],
      }),
    });
  };

  const buttonDisabled = outputTokenValue === 0 || outputTokenValue === '';

  const handleReadOutputValue = async () => {
    const result = await client.call({
      to: contractAddress,
      data: encodeFunctionData({
        abi: contractAbi,
        functionName: 'getTokenOut',
        args: [tokens[inputToken!].address, BigInt(+inputTokenValue * 10 ** 18)],
      }),
    });
    setOutputTokenValue(+BigInt(result.data as string).toString() / 10 ** 18);
  };

  useEffect(() => {
    handleReadOutputValue();
  }, [inputTokenValue, inputToken, outputToken]);

  const handleSwap = async () => {
    await sendTransaction({
      to: contractAddress,
      data: encodeFunctionData({
        abi: contractAbi,
        functionName: 'swap',
        args: [
          tokens[inputToken!].address,
          BigInt(+inputTokenValue * 10 ** 18),
          tokens[outputToken!].address,
        ],
      }),
    });
  };

  return (
    <WidthContainer>
      <Flex direction="column" w="100%" align="center" gap="md">
        <Title order={4} c="white" size="xl" style={{ textAlign: 'center' }}>
          SWAP <br /> Your Tokens
        </Title>
        <Flex
          direction="column"
          gap="md"
          p="8px"
          style={{ borderRadius: '16px' }}
          miw="300px"
          w="40%"
        >
          <SwapInput
            bgColor="#252525"
            value={inputTokenValue}
            setValue={setInputTokenValue}
            text="Sell"
            token={inputToken}
            setToken={setInputToken}
          />
          <SwapInput
            bgColor="#252525"
            value={outputTokenValue}
            text="Buy"
            token={outputToken}
            setToken={setOutputToken}
          />
          <Button disabled={buttonDisabled} size="xl" bg="indigo" radius="lg" onClick={handleSwap}>
            <Title order={3}>Swap</Title>
          </Button>
          <Button size="xl" bg="indigo" radius="lg" onClick={addLiquidity}>
            <Title order={3}>Add liquidity</Title>
          </Button>
        </Flex>
      </Flex>
    </WidthContainer>
  );
};
