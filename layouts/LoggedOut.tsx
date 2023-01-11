import { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { Logo } from '@/components/Logo';
import { Footer } from '@/components/Footer';
import { SpotifyTrigger } from '@/components/SpotifyTrigger';

interface Props {
  children: ReactNode;
}

export function LoggedOutLayout({ children }: Props) {
  return (
    <Flex direction="column" minH="100vh">
      <>
        <Flex p={4}>
          <Logo />

          <SpotifyTrigger styles={{ ml: 'auto', display: { base: 'none', lg: 'inline-flex' } }} />
        </Flex>
      </>

      <Box flex="1 1 auto" mt={8}>
        {children}
      </Box>

      <Footer />
    </Flex>
  );
}
