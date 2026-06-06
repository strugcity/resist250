export interface ProductVariant {
  id: string;
  size: string;
  priceInCents: number;
  printfulVariantId: number;
}

export interface Product {
  name: string;
  slug: string;
  description: string;
  printfulProductId: number;
  imageUrl: string;
  variants: ProductVariant[];
}

export const products: Product[] = [
  {
    name: 'We the People Tee',
    slug: 'we-the-people-tee',
    description:
      'Classic fit unisex tee with bold We the People constitutional text. 100% ring-spun cotton.',
    printfulProductId: 100001,
    imageUrl: '/images/placeholder-tee.jpg',
    variants: [
      { id: 'wtp-s', size: 'S', priceInCents: 2800, printfulVariantId: 200001 },
      { id: 'wtp-m', size: 'M', priceInCents: 2800, printfulVariantId: 200002 },
      { id: 'wtp-l', size: 'L', priceInCents: 2800, printfulVariantId: 200003 },
    ],
  },
  {
    name: 'Equal Justice Hoodie',
    slug: 'equal-justice-hoodie',
    description:
      'Heavyweight pullover hoodie celebrating the promise of equal justice under law.',
    printfulProductId: 100002,
    imageUrl: '/images/placeholder-hoodie.jpg',
    variants: [
      { id: 'ejh-s', size: 'S', priceInCents: 4800, printfulVariantId: 200004 },
      { id: 'ejh-m', size: 'M', priceInCents: 4800, printfulVariantId: 200005 },
      { id: 'ejh-l', size: 'L', priceInCents: 4800, printfulVariantId: 200006 },
    ],
  },
  {
    name: '250 Stars Tote',
    slug: '250-stars-tote',
    description:
      'Durable canvas tote with 250-star graphic commemorating the American sesquicentennial.',
    printfulProductId: 100003,
    imageUrl: '/images/placeholder-tote.jpg',
    variants: [
      { id: 'tote-os', size: 'One Size', priceInCents: 2200, printfulVariantId: 200007 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
