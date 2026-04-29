import { Dispatch, FC, SetStateAction } from 'react';
import { Flex, NumberInput, Text } from '@mantine/core';
import { TokenSelect } from './TokenSelect';

interface Props {
  text: string;
  bgColor: string;
  value?: string | number;
  setValue?: Dispatch<SetStateAction<number | string>>;
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

export const SwapInput: FC<Props> = ({ text, bgColor, value, setValue, token, setToken }) => {
  return (
    <Flex direction="column" style={{ padding: '8px 16px', borderRadius: '16px' }} bg={bgColor}>
      <Text size="xl">{text}</Text>
      <Flex align="center" justify="space-between">
        {setValue !== undefined ? (
          <NumberInput
            defaultValue={0}
            value={value}
            onChange={setValue}
            variant="unstyled"
            size="xl"
            rightSectionPointerEvents="none"
            contentEditable={setValue !== undefined}
            rightSection={<></>}
            styles={{
              input: {
                color: 'white',
                padding: '4px',
                width: '100%',
              },
            }}
            style={{
              width: '80%',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px',
              borderRadius: '8px 0 0 8px',
              userSelect: 'none',
              borderRight: 'none',
            }}
          />
        ) : (
          <Text size="xl" p="18px 8px">
            {value?.toString().slice(0, 14)}
          </Text>
        )}
        <TokenSelect token={token} setToken={setToken} />
      </Flex>
    </Flex>
  );
};
