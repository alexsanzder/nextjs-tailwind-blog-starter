import * as React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';
import classnames from 'classnames';
import { AppContext } from '@/context/AppContext';

const Menu = (): JSX.Element => {
  const { isMenuOpen, toggleMenu } = React.useContext(AppContext);

  const handleMenu = () => {
    toggleMenu(!isMenuOpen);
  };
  return (
    <div
      className={classnames(
        'fixed inset-0 z-40 flex justify-end transition-visibility delay-0 ',
        {
          'visible duration-[400ms]': isMenuOpen,
          'invisible duration-75': !isMenuOpen,
        }
      )}
    >
      <button
        className={classnames(
          'bg-opacity-40 absolute inset-0 z-0 block w-full h-full bg-black  cursor-pointer pointer-events-none transition-opacity duration-[400ms]',
          {
            'pointer-events-auto visible opacity-100': isMenuOpen,
            'pointer-events-none invisible opacity-0': !isMenuOpen,
          }
        )}
        onClick={handleMenu}
      ></button>
      <div
        className={classnames(
          'relative z-10 w-full h-full max-w-screen-sm overflow-visible translate-x-[150%] translate-y-0 duration-[400ms]',
          {
            'transform-none ': isMenuOpen,
            'transform-gpu': !isMenuOpen,
          }
        )}
      >
        <div className="flex justify-end min-h-full">
          <nav
            className={classnames(
              'dark:bg-black md:flex-grow md:pl-10 md:w-1/2 lg:pl-24 lg:pt-0 relative z-10 flex flex-col flex-none max-w-screen-sm pt-16 pl-8 overflow-hidden bg-white pointer-events-auto',
              'transition-transform translate-x-[110%] translate-y-0 duration-300 delay-100',
              {
                'transform-none ': isMenuOpen,
                transform: !isMenuOpen,
              }
            )}
          >
            <div
              className={classnames(
                'lg:flex lg:items-center h-36 hidden',
                'transition-opacity duration-300 ease-in',
                {
                  'opacity-100 delay-300': isMenuOpen,
                  'opacity-0': !isMenuOpen,
                }
              )}
            >
              <h1 className="lg:text-lg text-base font-extrabold leading-none tracking-tight uppercase">
                En cualquier dirección
              </h1>
            </div>
            <div className="flex flex-grow">
              <div className="flex flex-col w-full pointer-events-auto md:h-[calc(100vh-4rem)] lg:h-[calc(100vh-8rem)]">
                <div className="lg:text-4xl xl:text-5xl lg:mb-20 flex flex-col justify-around flex-grow mb-8 text-3xl font-bold leading-none tracking-tight uppercase">
                  <ul role="navigation" tabIndex={0}>
                    <li>
                      <Link href="/">
                        <a className="relative block pt-0 pb-5 pr-8">Norte</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="relative block py-5 pr-8">Sur</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="relative block py-5 pr-8">Oriente</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="relative block py-5 pr-8">Poniente</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="relative block py-5 pr-8">Alemania</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="relative block py-5 pr-8">México</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="lg:pb-20 pb-10 pr-4 mt-auto">
                  <div className="pb-4 -mr-3">
                    <div>
                      <ul className="flex">
                        <li className="w-10 h-10 mr-2">
                          <Link href="#">
                            <a className="flex items-center justify-center w-full h-full cursor-pointer pointer-events-auto">
                              <Youtube />
                            </a>
                          </Link>
                        </li>
                        <li className="w-10 h-10 mx-2">
                          <Link href="#">
                            <a className="flex items-center justify-center w-full h-full cursor-pointer pointer-events-auto">
                              <Instagram />
                            </a>
                          </Link>
                        </li>
                        <li className="w-10 h-10 mx-2">
                          <Link href="#">
                            <a className="flex items-center justify-center w-full h-full cursor-pointer pointer-events-auto">
                              <Facebook />
                            </a>
                          </Link>
                        </li>
                        <li className="w-10 h-10 mx-2">
                          <Link href="#">
                            <a className="flex items-center justify-center w-full h-full cursor-pointer pointer-events-auto">
                              <Twitter />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
