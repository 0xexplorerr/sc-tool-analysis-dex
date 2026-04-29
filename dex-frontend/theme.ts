'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue', // Dowolny kolor główny
  components: {
    Text: {
      defaultProps: {
        c: 'white',
      },
    },
  },
  fontFamily: 'Inter, sans-serif',
});
