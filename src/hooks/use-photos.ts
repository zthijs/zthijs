"use client";
import { useEffect, useState } from "react";

interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
    thumb: string;
  };
  alt_description: string | null;
  description: string | null;
  width: number;
  height: number;
  user: {
    name: string;
    username: string;
  };
}

interface PhotoWithOrientation extends UnsplashPhoto {
  orientation: "portrait" | "landscape";
}

export const usePhotos = () => {
  const [photos, setPhotos] = useState<PhotoWithOrientation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.unsplash.com/users/${process.env.NEXT_PUBLIC_UNSPLASH_USERNAME}/photos?per_page=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch photos");
        }
        const data = await response.json();

        const shuffledData = data.sort(() => Math.random() - 0.5);
        const selectedPhotos = shuffledData.slice(0, 9);

        const processedPhotos: PhotoWithOrientation[] = selectedPhotos.map(
          (photo: UnsplashPhoto) => ({
            ...photo,
            orientation: photo.height > photo.width ? "portrait" : "landscape",
          }),
        );

        setPhotos(processedPhotos);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return { photos, loading, error };
};
