// import { NextRequest, NextResponse } from 'next/server';
// import { revalidatePath } from 'next/cache';

// export async function POST(request: NextRequest) {
//   const secret = request.nextUrl.searchParams.get('secret');

//   if (secret !== process.env.REVALIDATION_TOKEN) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

//   const path = request.nextUrl.searchParams.get('path') || '/about-us';

//   revalidatePath(path);

//   return NextResponse.json({ revalidated: true, now: Date.now() });
// }