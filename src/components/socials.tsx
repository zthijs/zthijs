import Text from "@/components/ui/text";
import Wrapper from "@/components/ui/wrapper";
import { socials } from "@/constants/site";

export const Socials = () => (
  <section>
    <Wrapper variant="standard">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 border-b py-8 border-base-200 dark:border-base-800">
        <div className="lg:sticky lg:top-24 lg:z-40 self-start">
          <Text
            tag="h2"
            variant="textSM"
            className="text-base-900 dark:text-white"
          >
            Socials
          </Text>
        </div>
        <div className="flex flex-col gap-2 lg:col-span-2">
          {socials.map((social) => (
            <Text
              key={social.platform}
              href={social.url}
              tag="a"
              target="_blank"
              variant="textXS"
              className="text-base-600 dark:text-base-500 hover:text-base-900 dark:hover:text-white"
            >
              {social.platform}
            </Text>
          ))}
        </div>
      </div>
    </Wrapper>
  </section>
);
