import type { MetadataRoute } from "next";
import { root } from "@/constants/site";

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: root,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
