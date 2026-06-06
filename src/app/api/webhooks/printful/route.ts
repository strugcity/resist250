import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  // TODO: verify Printful webhook signature
  // TODO: handle order status events
  console.log('[Printful webhook]', body.type);
  return NextResponse.json({ received: true });
}
