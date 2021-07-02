import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'react-feather';
import classnames from 'classnames';
import { AppContext } from '@/context/AppContext';

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { isMenuOpen } = React.useContext(AppContext);

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  return (
    <button
      className={classnames(
        'sm:w-12 md:h-12 relative flex items-center justify-center w-8 h-8 cursor-pointer',
        {
          'pointer-events-none opacity-0': isMenuOpen,
          'pointer-events-auto opacity-100': !isMenuOpen,
        }
      )}
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      <>
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <Sun />
        ) : (
          <Moon />
        )}
      </>
    </button>
  );
};

export default ThemeSwitch;
