import { clerkMiddleware } from '@clerk/nextjs/server';
 
export default clerkMiddleware(async (auth, req) => {
  await auth.protect();
});
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    // '/(api|trpc)(.*)'], // Run middleware on API routes
  ]
};