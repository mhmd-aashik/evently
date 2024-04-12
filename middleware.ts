import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook",
    "/api/webhook/stripe",
    "/api/uplordthing",
  ],
  ignoredRoutes: ["/api/webhook", "/api/webhook/stripe", "/api/uplordthing"],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
