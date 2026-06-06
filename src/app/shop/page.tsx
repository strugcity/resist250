import Link from 'next/link';
import { products } from '@/data/products';

export default function ShopPage() {
  return (
    <main>
      <h1>Shop</h1>
      <ul>
        {products.map((p) => (
          <li key={p.slug}>
            <Link href={`/products/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
