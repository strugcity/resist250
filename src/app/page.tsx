import { products } from '@/data/products';

export default function HomePage() {
  return (
    <main>
      <section>
        <h1>Resist250</h1>
        <p>Patriotic, pro-democracy merchandise for America&apos;s 250th.</p>
      </section>
      <section>
        <h2>Featured Products</h2>
        <ul>
          {products.slice(0, 3).map((p) => (
            <li key={p.slug}>{p.name}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
