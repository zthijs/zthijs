import { Gallery } from "@/components/gallery";
import { Introduction } from "@/components/introduction";
import { Socials } from "@/components/socials";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <Introduction />
      <Stack />
      <Gallery />
      <Socials />
    </>
  );
}
