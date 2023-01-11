import { useEffect, useState } from 'react';
import { Button, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { getAuthorizationUrl, getTokenFromUrl } from '@/services/spotify';

export const SpotifyTrigger = ({ styles = {}, text = 'Connect to Spotify' }) => {
  const router = useRouter();
  const toast = useToast();

  const [disabled, setDisabled] = useState(false);
  const [textOverride, setTextOverride] = useState('');

  useEffect(() => {
    const returnUrl = window.sessionStorage.getItem('temp_returnUrl');

    const token = getTokenFromUrl(router.asPath);

    if (token) {
      // If token is successfully parsed and stored
      // Remove params from route and temp session items
      toast({
        title: 'Connected to Spotify',
        status: 'success',
        duration: 3000,
      });

      router.replace(returnUrl || '/');
      window.sessionStorage.removeItem('temp_returnUrl');
    }
  }, [router, router.asPath, router.pathname, toast]);

  useEffect(() => {
    // When params are stripped from url, this lifecycle will run.
    const existingToken = window.sessionStorage.getItem('spotifyToken');

    if (existingToken) {
      setTextOverride(
        existingToken === 'denied' ? 'Spotify Connection Denied' : 'Connected to Spotify'
      );

      setDisabled(true);
    }
  }, []);

  const onClick = async () => {
    const existingToken = window.sessionStorage.getItem('spotifyToken');

    if (!existingToken) {
      window.sessionStorage.setItem('temp_returnUrl', router.pathname);
      router.push(await getAuthorizationUrl());
    } else if (existingToken === 'denied') {
      toast({
        title: 'Spotify permissions were not granted',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      // TODO: instead of toast...open modal asking to reauthenticate?
    }
  };

  return (
    <Button onClick={onClick} disabled={disabled} {...styles}>
      {textOverride || text}
    </Button>
  );
};
