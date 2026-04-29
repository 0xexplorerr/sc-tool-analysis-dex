import { Dispatch, FC, SetStateAction } from 'react';
import { Image, Select } from '@mantine/core';
import { tokens } from '@/consts';

interface Props {
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}

export const TokenSelect: FC<Props> = ({ token, setToken }) => {
  return (
    <Select
      data={Object.values(tokens).map((token) => token.key)}
      defaultValue={tokens.ETH.key}
      leftSectionPointerEvents="none"
      leftSection={token ? <Image src={tokens[token].iconUrl} h="20px" w="20px" /> : <></>}
      onChange={setToken}
      value={token}
      allowDeselect={false}
      inputSize="xl"
      size="xs"
      variant="unstyled"
      bg="transparent"
      style={{
        width: '100px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        backgroundColor: 'black',
        border: '1px solid #808080',
        padding: '4px',
        borderRadius: '8px',
        userSelect: 'none',
      }}
      styles={{
        dropdown: {
          width: '150px !important',
          bg: 'black',
        },
        input: {
          color: 'white',
        },
      }}
    />
  );
};
