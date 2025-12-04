import type { MetadataRoute } from "next";
import { root } from "@/constants/site";

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "ia_archiver",
        disallow: "/",
      },
    ],
    sitemap: `${root}/sitemap.xml`,
  };
}
