import Head from 'next/head';
import { Heading, Center } from '@chakra-ui/react';

function Page() {
  return (
    <>
      <Head>
        <title>Record Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading size="lg" data-testid="welcome-header">
          Record Store
        </Heading>
      </Center>
    </>
  );
}

export default Page;
