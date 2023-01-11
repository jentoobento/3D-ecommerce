export function getQueryParams<T>(url: string, pathname: string | null): T {
  let queryString = url;

  if (pathname && queryString.includes(pathname)) {
    queryString = queryString.split(`${pathname}#`)[1];
  }

  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split('=');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }

  return query as T;
}
