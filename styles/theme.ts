import { theme as ChakraTheme } from '@chakra-ui/pro-theme';
import { extendTheme } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const theme = extendTheme(
  {
    colors: {
      ...ChakraTheme.colors,
      brand: 'theme.colors.blue',
      black: '#000000',
      white: '#FFFFFF',
    },
  },
  withProse({}),
  ChakraTheme
);

export default theme;
