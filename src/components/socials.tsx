import Text from '@/components/ui/text';
import Wrapper from '@/components/ui/wrapper';

const items = [
  { label: 'GitHub', href: 'https://github.com/zthijs' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zthijs' },
  { label: 'Email', href: 'mailto:info@zthijs.dev' },
];

export const Socials = () => (
  <section>
    <Wrapper variant="standard">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4 border-b py-8 border-base-200 dark:border-base-800">
        <div className="xl:sticky xl:top-24 xl:z-40 self-start">
          <Text tag="h2" variant="textSM" className="text-base-900 dark:text-white">
            My Socials
          </Text>
        </div>
        <div className="flex flex-col gap-2 md:col-span-2 xl:col-span-3">
          {items.map(item => (
            <Text
              key={item.label}
              href={item.href}
              tag="a"
              target="_blank"
              variant="textXS"
              className="text-base-600 dark:text-base-500 hover:text-base-900 dark:hover:text-white"
            >
              {item.label}
            </Text>
          ))}
        </div>
      </div>
    </Wrapper>
  </section>
);
