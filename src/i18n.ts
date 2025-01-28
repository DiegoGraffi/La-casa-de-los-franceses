import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

// Can be imported from a shared config
const locales = ["es", "fr"];

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get("X-NEXT-INTL-LOCALE");

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
