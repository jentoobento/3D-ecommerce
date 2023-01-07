import Head from 'next/head';
import { Heading, Center } from '@chakra-ui/react';

function Page() {
  return (
    <>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading size="lg" data-testid="welcome-header">
          Products Page
        </Heading>
      </Center>
    </>
  );
}

export default Page;
