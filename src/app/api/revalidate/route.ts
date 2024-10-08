import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

const routesToRevalidate: string[] = [
    '/',
    '/about', '/o-domku',
    '/pricing', '/cennik',
    '/contact', '/kontakt',
    '/neighborhood', '/okolica',
    '/gallery', '/galeria',
    '/gallery/:path*', '/galeria/:path*'
  ];

  export async function POST(request: NextRequest): Promise<NextResponse> {
    const requestHeaders: Headers = new Headers(request.headers);
    const secret: string | null = requestHeaders.get("x-vercel-reval-key");
  
    if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: "Invalid secret" }, 
        { status: 401 }
      );
    }
  
    try {
      routesToRevalidate.forEach((route: string) => {
        revalidatePath(route);
      });
  
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        message: "Revalidated all routes"
      });
    } catch (error) {
      const errorMessage: string = error instanceof Error ? error.message : 'Unknown error occurred';
      
      return NextResponse.json({
        message: "Error revalidating",
        error: errorMessage
      }, { status: 500 });
    }
  }