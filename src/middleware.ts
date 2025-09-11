import { NextRequest, NextResponse } from 'next/server';

type RateRecord = {
  tokens: number;
  lastRefill: number;
};

const WINDOW_MS = 60_000; // 1 minute
const MAX_TOKENS = 20; // 20 requests/min per IP
const REFILL_RATE = MAX_TOKENS / WINDOW_MS; // tokens per ms

const buckets = new Map<string, RateRecord>();

function allow(ip: string): boolean {
  const now = Date.now();
  const record = buckets.get(ip) ?? { tokens: MAX_TOKENS, lastRefill: now };
  const elapsed = now - record.lastRefill;
  const refill = elapsed * REFILL_RATE;
  record.tokens = Math.min(MAX_TOKENS, record.tokens + refill);
  record.lastRefill = now;

  if (record.tokens >= 1) {
    record.tokens -= 1;
    buckets.set(ip, record);
    return true;
  }

  buckets.set(ip, record);
  return false;
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
    if (!allow(ip)) {
      return NextResponse.json({ error: 'Too Many Requests' }, { status: 429 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/contact'],
};
