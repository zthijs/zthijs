'use client';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

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
  orientation: 'portrait' | 'landscape';
}

export const usePhotos = () => {
  const { isLoading, data, error } = useSWR<PhotoWithOrientation[]>(
    `https://api.unsplash.com/users/${process.env.NEXT_PUBLIC_UNSPLASH_USERNAME}/photos?per_page=30&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}`,
    fetcher,
  );

  const photos = data
    ? data
        .map(photo => ({
          ...photo,
          orientation: photo.width > photo.height ? 'landscape' : 'portrait',
        }))
        .sort(() => Math.random() - 0.5)
        .slice(0, 9)
    : [];

  return { photos, isLoading, error };
};
