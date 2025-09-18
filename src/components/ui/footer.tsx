"use client";
import type { FC } from "react";
import { useTime } from "@/hooks/use-time";
import Text from "./text";
import Wrapper from "./wrapper";

export const Footer: FC = () => {
  const { clock, year } = useTime();

  return (
    <footer>
      <Wrapper variant="standard">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 border-b pt-8 pb-24 border-base-200 dark:border-base-800">
          <Text
            tag="h3"
            variant="textSM"
            className="text-base-900 dark:text-white"
          >
            Amsterdam, Netherlands
            <span className="block text-base-600 dark:text-base-400 text-xs">
              {clock}
            </span>
          </Text>
          <Text
            tag="p"
            variant="textXS"
            className="text-base-600 dark:text-base-400 md:col-span-2 xl:col-span-3"
          >
            © <span>{year}</span> zthijs. All rights reserved.
          </Text>
        </div>
      </Wrapper>
    </footer>
  );
};
