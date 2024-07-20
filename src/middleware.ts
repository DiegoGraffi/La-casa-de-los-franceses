import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "fr"],

  // Used when no locale matches
  defaultLocale: "es",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/((?!api|_next/static|_next/image|img/|favicon.ico).*)",
    "/",
    "/(es|fr)/:path*",
  ],
};
