import { Link } from '@tanstack/react-router';
import SvgHamburger from '../Icons/Hamburger';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
  const [ddOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex flex-row items-center justify-between gap-2 px-4 py-2">
      <Link to="/" className="text-xl">
        A Longer Logo
      </Link>
      <div
        ref={dropdownRef}
        className={`${ddOpen ? 'flex' : 'hidden'} absolute right-4 top-12 w-[100px] flex-col bg-white text-xl shadow md:static md:flex md:w-fit md:flex-row md:gap-6 md:shadow-none`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <Link
          to="/challenge1"
          className="flex items-center justify-center border-b p-2 md:border-none [&.active]:font-bold"
        >
          C1
        </Link>
        <Link
          to="/todo"
          className="flex items-center justify-center border-b p-2 md:border-none [&.active]:font-bold"
        >
          Todo
        </Link>
        <Link
          to="/accordian"
          className="flex items-center justify-center border-b p-2 md:border-none [&.active]:font-bold"
        >
          Accordian
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center border-b p-2 md:border-none [&.active]:font-bold"
        >
          Home
        </Link>{' '}
        <Link
          to="/about"
          className="flex items-center justify-center border-b p-2 md:border-none [&.active]:font-bold"
        >
          About
        </Link>
      </div>
      <button
        onClick={() => {
          setIsOpen(!ddOpen);
        }}
        className="bg-transparent md:hidden"
      >
        <SvgHamburger width={44} height={44} />
      </button>
    </header>
  );
};

export default Header;
