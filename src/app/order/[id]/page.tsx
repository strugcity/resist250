interface Props {
  params: Promise<{ id: string }>;
}

export default async function OrderConfirmationPage({ params }: Props) {
  const { id } = await params;
  return (
    <main>
      <h1>Order Confirmed</h1>
      <p>Order ID: {id}</p>
    </main>
  );
}
