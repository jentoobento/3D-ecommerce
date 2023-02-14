import Head from 'next/head';
import { Heading, Center, Container, List, ListItem } from '@chakra-ui/react';

const test = [...Array(5).keys()]

function Page() {
  return (
    <>
      <Head>
        <title>Record Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Center mb={4}>
        <Heading size="lg" data-testid="welcome-header">
          Record Store
        </Heading>
      </Center>
      <List spacing={2}>
        {test.map((t) => (
          <ListItem>
            <Container
              key={t}
              w="full"
              flexDirection="row"
              display="flex"
              border="solid"
              borderWidth={4}
              borderColor="grey"
            >
              <Container w="50%" m={5} mr={0}>
                Add Model
              </Container>
              <div style={{ border: 'solid', borderRightWidth: 4, borderColor: 'grey' }} />
              <Container w="50%" m={5} ml={0}>
                Add Description
              </Container>
            </Container>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Page;
