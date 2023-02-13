import Head from 'next/head';
import { Heading, Center } from '@chakra-ui/react';

function Page() {
  return (
    <>
      <Head>
        <title>Product</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center>
        <Heading size="lg" data-testid="welcome-header">
          Product Page
        </Heading>
      </Center>
    </>
  );
}

export default Page;
