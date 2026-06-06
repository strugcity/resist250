const PRINTFUL_BASE_URL = 'https://api.printful.com';

function getAuthHeader(): HeadersInit {
  const key = process.env.PRINTFUL_API_KEY;
  if (!key) throw new Error('Missing PRINTFUL_API_KEY env var');
  return {
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  };
}

async function printfulFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${PRINTFUL_BASE_URL}${path}`, {
    ...init,
    headers: {
      ...getAuthHeader(),
      ...init?.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Printful API error ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  return json.result as T;
}

export const printful = {
  getProducts: () => printfulFetch<unknown[]>('/store/products'),
  getProduct: (id: number) => printfulFetch<unknown>(`/store/products/${id}`),
  createOrder: (body: unknown) =>
    printfulFetch<unknown>('/orders', {
      method: 'POST',
      body: JSON.stringify(body),
    }),
};
