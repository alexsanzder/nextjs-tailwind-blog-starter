import Link from 'next/link';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="dark:text-white py-4 pr-6 text-gray-900">Home</a>
      </Link>
      <Link href="/about">
        <a className="dark:text-white px-6 py-4 text-gray-900">About</a>
      </Link>
    </nav>
  );
};

export default Navigation;
