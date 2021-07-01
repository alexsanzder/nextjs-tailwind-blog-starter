import ThemeSwitch from '@/components/ThemeSwitch';

const Navigation = (): JSX.Element => {
  return (
    <nav className=" dark:text-white flex px-1 text-gray-900 pointer-events-auto">
      <div className="px-1 py-0">
        <div className="relative z-0">
          <button className="relative flex text-center items-center justify-center w-[50px] h-[50px] text-base font-bold leading-[0.9] tracking-[0.045em] cursor-pointer">
            <span className="dark:border-white w-9 h-9 flex items-center justify-center flex-none overflow-hidden border-2 border-gray-900 rounded-full">
              <span className="block">ES</span>
            </span>
          </button>
        </div>
      </div>
      <div className="px-1 py-0">
        <button className="w-[50px] h-[50px] relative flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="px-1 py-0">
        <ThemeSwitch />
      </div>
      <div className="px-1 py-0">
        <button className="w-[50px] h-[50px] relative flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
