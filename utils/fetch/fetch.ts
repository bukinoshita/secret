import fetch from 'isomorphic-unfetch';

export default async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit,
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const error = new Error('We could not reveal this secret.');
    throw error;
  }

  return res.json();
}
