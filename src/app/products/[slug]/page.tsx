import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/data/products';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ul>
        {product.variants.map((v) => (
          <li key={v.id}>
            {v.size} — ${(v.priceInCents / 100).toFixed(2)}
          </li>
        ))}
      </ul>
    </main>
  );
}
