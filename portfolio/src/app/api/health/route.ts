import { NextResponse } from 'next/server';

/** GET /api/health — Liveness check endpoint */
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'mohid-portfolio',
    },
    { status: 200 }
  );
}
