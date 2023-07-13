import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/logo.png';

export default function Navbar() {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12">
              <Link href="/">
                <a>
                  <Image src={Logo} layout="fill" alt="Find My Bestfriend Logo" priority={true} />
                </a>
              </Link>
            </div>
            <Link href="/" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
              <a className="text-sm font-medium">Find My Bestfriend</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/listings" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                  <a>Listings</a>
                </Link>
              </li>
              <li>
                <Link href="/reportlostpet" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                  <a>Report Lost Pet</a>
                </Link>
              </li>
              <li>
                <Link href="/reportfoundpet" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                  <a>Report Found Pet</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
