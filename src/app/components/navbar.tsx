import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/logo.png'

export default function Navbar() {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Image src={Logo} className="w-40 h-40 mr-2" alt="Find My Bestfriend Logo" priority={true} />
              </a>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-5 h-5 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden w-full md:block md:w-auto flex-grow" id="navbar-default">
            <ul className="flex items-center space-x-4 p-2 md:p-0 md:space-x-8">
              <li>
                <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded hover:bg-blue-800 md:bg-transparent md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/listings" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-500">
                  Listings
                </Link>
              </li>
              <li>
                <Link href="/reportlostpet" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-500">
                  Report Lost Pet
                </Link>
              </li>
              <li>
                <Link href="/reportfoundpet" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-500">
                  Report Found Pet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
