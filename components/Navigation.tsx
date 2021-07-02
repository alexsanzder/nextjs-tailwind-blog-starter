import * as React from 'react';
import { Menu, Search } from 'react-feather';
import classnames from 'classnames';
import ThemeSwitch from '@/components/ThemeSwitch';
import { AppContext } from '@/context/AppContext';

const Navigation = (): JSX.Element => {
  const { isMenuOpen, toggleMenu } = React.useContext(AppContext);

  const handleMenu = () => {
    toggleMenu(!isMenuOpen);
  };
  return (
    <div className="dark:text-white sm:relative right-5 sm:right-0 absolute flex px-1 text-gray-900 pointer-events-auto">
      <div className="sm:px-1 px-0 py-0">
        <div
          className={classnames('relative z-0', {
            'pointer-events-none opacity-0': isMenuOpen,
            'pointer-events-auto opacity-100': !isMenuOpen,
          })}
        >
          <button className="relative flex text-center items-center justify-center sm:w-12 md:h-12  w-8 h-8 text-xs sm:text-base font-semibold sm:font-bold leading-[0.9] sm:tracking-[0.045em] cursor-pointer">
            <span className="dark:border-white sm:w-9 sm:h-9 flex items-center justify-center flex-none w-6 h-6 overflow-hidden border-2 border-gray-900 rounded-full">
              <span className="block">ES</span>
            </span>
          </button>
        </div>
      </div>
      <div className="sm:px-1 px-0 py-0">
        <button
          className={classnames(
            'sm:w-12 md:h-12 relative flex items-center justify-center w-8 h-8 cursor-pointer',
            {
              'pointer-events-none opacity-0': isMenuOpen,
              'pointer-events-auto opacity-100': !isMenuOpen,
            }
          )}
        >
          <Search />
        </button>
      </div>
      <div className="sm:px-1 px-0 py-0">
        <ThemeSwitch />
      </div>
      <div className="sm:px-1 px-0 py-0">
        <button
          className={classnames(
            'sm:w-12 md:h-12 relative flex items-center justify-center w-8 h-8 cursor-pointer',
            'before:absolute before:left-0 before:right-0 before:mx-auto lg:before:w-7 before:w-5 before:h-0.5 before:bg-current lg:before:top-4 before:top-2 before:transition-transform before:origin-center before:ease-linear',
            'after:absolute after:left-0 after:right-0 after:mx-auto lg:after:w-7 after:w-5 after:h-0.5 after:bg-current lg:after:top-8 after:top-5 after:transition-transform after:origin-center after:ease-linear',
            {
              'before:rotate-[135deg] before:translate-y-2': isMenuOpen,
              'after:rotate-45 after:-translate-y-2': isMenuOpen,
            }
          )}
          onClick={() => handleMenu()}
        >
          <span
            className={classnames(
              'block w-full h-full overflow-hidden cursor-pointer text-left whitespace-nowrap',
              'before:absolute before:left-0 before:right-0 before:mx-auto lg:before:w-5 before:w-4 before:h-0.5 before:bg-current before:top-6 before:ease-linear',
              {
                'before:opacity-0 before:duration-100': isMenuOpen,
              }
            )}
          />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
