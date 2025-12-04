import Image from "next/image";
import Text from "@/components/ui/text";
import Wrapper from "@/components/ui/wrapper";

export const Introduction = () => (
  <section>
    <Wrapper variant="standard">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 border-b pb-8 pt-24 border-base-200 dark:border-base-800">
        <Image
          src={"/avatar.jpeg"}
          alt="Thijs"
          width={400}
          height={400}
          loading="eager"
          decoding="async"
          className="rounded-2xl size-24 object-cover object-center"
        />
        <div className="md:col-span-2 xl:col-span-3">
          <Text
            tag="h1"
            variant="textSM"
            className="font-medium text-base-900 dark:text-white"
          >
            Hi 👋, I'm Thijs
          </Text>

          <Text
            tag="p"
            variant="textXS"
            className="text-base-600 dark:text-base-400"
          >
            Fullstack Software Engineer & Photographer
          </Text>
          <Text
            tag="p"
            variant="textSM"
            className="text-base-600 dark:text-base-400 mt-4"
          >
            I'm a full stack developer with a passion for building scalable,
            user-friendly software and streamlining workflows through
            automation. With experience in both software engineering and DevOps,
            I enjoy solving complex challenges and creating efficient,
            maintainable solutions. Outside of tech, I love photography and
            drone videography, capturing unique perspectives.
          </Text>
        </div>
      </div>
    </Wrapper>
  </section>
);
