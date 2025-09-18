import Button from "@/components/ui/button";
import Text from "@/components/ui/text";
import Wrapper from "@/components/ui/wrapper";

export default function NotFound() {
  return (
    <section>
      <Wrapper variant="standard">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 border-b py-24 border-base-200 dark:border-base-800">
          <div>
            <Text
              tag="h1"
              variant="textSM"
              className="font-medium text-base-900 dark:text-white"
            >
              404 — Not Found
            </Text>
            <Text
              tag="p"
              variant="textXS"
              className="text-base-600 dark:text-base-400"
            >
              You wandered too far.
            </Text>
          </div>
          <div className="xl:col-span-3 flex flex-col">
            <Text
              tag="p"
              variant="textSM"
              className="text-base-60 dark:text-base-400"
            >
              This page doesn't exist, never did, or was removed while debugging
              something else. Try going back or check if you typo'd your way
              into oblivion. If you're lost, you're not alone.
            </Text>
            <div className="flex mt-2">
              <Button isLink={true} href="/" size="xs" variant="muted">
                Go back home
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
