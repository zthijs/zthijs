import Image from "next/image";
import Link from "next/link";
import Text from "@/components/ui/text";
import Wrapper from "@/components/ui/wrapper";
import { stack } from "@/constants/stack";

export const Stack = () => (
  <section>
    <Wrapper variant="standard">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 border-b py-8 border-base-200 dark:border-base-800">
        <div className="xl:sticky xl:top-24 xl:z-40 self-start">
          <Text
            tag="h2"
            variant="textSM"
            className="text-base-900 dark:text-white"
          >
            My Stack
          </Text>
        </div>
        <div className="md:col-span-2 xl:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
          {stack.map((item) => (
            <article
              key={item.title}
              className="group relative grid grid-cols-1 gap-4 xl:grid-cols-3 xl:items-start "
            >
              <div className="absolute -inset-y-4 z-0 scale-95 bg-base-50 dark:bg-base-800/20 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 -inset-x-4 rounded-2xl duration-300 " />
              <div className="xl:col-span-2">
                <div className="flex items-center gap-4 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={400}
                    loading="eager"
                    decoding="async"
                    className="rounded-lg size-12 object-cover object-center relative"
                  />
                  <div>
                    <Text
                      tag="h3"
                      variant="textSM"
                      className=" font-medium tracking-tight text-base-900 dark:text-white  "
                    >
                      <Link href={item.link}>
                        <>
                          <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                          <span className="relative z-10">{item.title}</span>
                        </>
                      </Link>
                    </Text>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Wrapper>
  </section>
);
