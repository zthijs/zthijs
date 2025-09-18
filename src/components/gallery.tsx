"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Text from "@/components/ui/text";
import Wrapper from "@/components/ui/wrapper";
import { usePhotos } from "@/hooks/use-photos";
import { cn } from "@/lib/utils";

export const Gallery = () => {
  const { photos } = usePhotos();

  return (
    <section>
      <Wrapper variant="standard">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 border-b py-8 border-base-200 dark:border-base-800">
          <div className="lg:sticky lg:top-24 lg:z-40 self-start">
            <Text
              tag="h2"
              variant="textSM"
              className="text-base-900 dark:text-white"
            >
              My Photo's
            </Text>
          </div>
          <div className="flex flex-col gap-12 lg:col-span-2">
            <PhotoProvider>
              <div className="columns-2 md:columns-3 gap-6 ">
                {photos.map((photo) => (
                  <PhotoView key={photo.id} src={photo.urls.full}>
                    <div className="break-inside-avoid mb-6 cursor-pointer">
                      <img
                        className={cn("w-full rounded-lg object-cover", {
                          "aspect-[3/4]": photo.orientation === "portrait",
                          "aspect-[4/3]": photo.orientation === "landscape",
                        })}
                        src={photo.urls.thumb}
                        alt={photo.alt_description!}
                      />
                    </div>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>
            <Text
              tag="p"
              variant="textXS"
              className="text-base-600 dark:text-base-400"
            >
              View more on my{" "}
              <Text
                tag="a"
                target="_blank"
                href="https://unsplash.com/@zthijs"
                variant="textXS"
                className="text-base-700 dark:text-base-300"
              >
                Unsplash
              </Text>{" "}
              page.
            </Text>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
