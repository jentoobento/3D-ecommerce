import { getQueryParams } from '@/utils/getQueryParams';

const BASE_PATH = 'https://api.spotify.com/v1';

// Allow implicit grant to your Spotify account
// Returns access token as query param
export const getAuthorizationUrl = async () => {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${encodeURIComponent(
    process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || ''
  )}&scope=${encodeURIComponent(
    'user-read-private user-read-email'
  )}&redirect_uri=${encodeURIComponent(process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || '')}`;

  return url;
};

interface SpotifyAuthorizedHashFragment {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export const getTokenFromUrl = (urlWithToken: string) => {
  const pathname = window.sessionStorage.getItem('temp_returnUrl');

  if (!pathname) {
    // Call getAuthorizationUrl first.
    return;
  }

  if (urlWithToken?.includes('access_token')) {
    const params = getQueryParams<SpotifyAuthorizedHashFragment>(urlWithToken, pathname);
    const token = `${params.token_type} ${params.access_token}`;
    window.sessionStorage.setItem('spotifyToken', token);

    return token;
  } else {
    window.sessionStorage.setItem('spotifyToken', 'denied');

    return '';
  }
};

export const getAlbum = async ({ token }: { token: string }) => {
  try {
    const res = await fetch(`${BASE_PATH}/artists/43ZHCT0cAZBISjO8DG9PnE/albums`, {
      method: 'GET',
      Authorization: token,
    });

    const result = res.json();

    return result;
  } catch (e) {
    return e;
  }
};
