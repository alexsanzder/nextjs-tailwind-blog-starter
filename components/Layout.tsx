// components/Layout.tsx
import Header from '@/components/Header';
import Meta from '@/components/Meta';
import { MetaProps } from '@/types/meta';

type LayoutProps = {
  children: React.ReactNode;
  pageTitle?: string;
  customMeta?: MetaProps;
};

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Meta customMeta={customMeta} />
      <div className="max-w-prose px-4 mx-auto">
        <Header />
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  );
};

export default Layout;
