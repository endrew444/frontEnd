import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Log the request metadata
  console.log(`Request received: ${request.method} ${request.nextUrl.pathname}`);

  // Return JSON response with welcome message
  return NextResponse.json({ message: 'Welcome to the API!' });
}
