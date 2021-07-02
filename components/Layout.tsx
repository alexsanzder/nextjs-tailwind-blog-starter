import Meta from '@/components/Meta';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
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
      <div className="block min-h-screen">
        <div className="PageTransitionWipeContent"></div>
        <div className="PageTransitionContent">
          <Header />
          <Menu />
          <main className="Main">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
