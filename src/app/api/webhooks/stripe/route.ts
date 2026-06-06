import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get('stripe-signature');
  // TODO: verify webhook signature with STRIPE_WEBHOOK_SECRET
  // TODO: handle checkout.session.completed, payment_intent.payment_failed, etc.
  console.log('[Stripe webhook] sig present:', !!sig, 'body length:', rawBody.length);
  return NextResponse.json({ received: true });
}
