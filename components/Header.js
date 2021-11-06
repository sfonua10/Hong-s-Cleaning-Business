/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import yellowMark from "../public/workflow-mark-yellow-600.svg";

const Header = () => {
  const resources = [
    {
      name: "Help Center",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "#",
      icon: SupportIcon,
    },
    {
      name: "Guides",
      description:
        "Learn how to maximize our platform to get the most out of it.",
      href: "#",
      icon: BookmarkAltIcon,
    },
    {
      name: "Events",
      description:
        "See what meet-ups and other events we might be planning near you.",
      href: "#",
      icon: CalendarIcon,
    },
    {
      name: "Security",
      description: "Understand how we take your privacy seriously.",
      href: "#",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <Popover className="relative bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* <Link href="/">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src={yellowMark}
                  alt=""
                />
              </a>
            </Link> */}
            <svg
              className="h-8 w-auto sm:h-10"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.258 26.865C15.2725 27.4021 15.1797 27.9367 14.9852 28.4376C14.7906 28.9384 14.4982 29.3955 14.125 29.782C13.7521 30.1668 13.3057 30.4728 12.8124 30.682C12.3191 30.8913 11.7888 30.9994 11.253 31C10.717 31.0002 10.1865 30.8924 9.6931 30.6832C9.19967 30.4739 8.75344 30.1674 8.381 29.782C8.0071 29.396 7.71423 28.939 7.51965 28.438C7.32507 27.9371 7.2327 27.4022 7.248 26.865C7.257 26.167 7.448 25.483 7.805 24.884C8.161 24.284 8.668 23.79 9.275 23.451C9.251 23.56 9.365 23.396 9.275 23.451L11.135 21.799C12.6094 20.2298 13.4329 18.1592 13.439 16.006C13.439 13.08 11.728 10.105 9.269 8.549C9.363 8.604 9.233 8.455 9.269 8.549C8.66169 8.20902 8.15494 7.71469 7.8 7.116C7.44383 6.5163 7.25174 5.83344 7.243 5.136C7.22836 4.59872 7.32102 4.06391 7.51556 3.56287C7.71011 3.06183 8.00262 2.60462 8.376 2.218C8.74881 1.83334 9.19497 1.52735 9.68811 1.31815C10.1812 1.10894 10.7113 1.00076 11.247 1C11.783 0.999714 12.3135 1.10742 12.807 1.31668C13.3004 1.52595 13.7466 1.83249 14.119 2.218C14.493 2.60395 14.786 3.06089 14.9806 3.56188C15.1752 4.06288 15.2675 4.59777 15.252 5.135C15.2624 7.30708 16.1019 9.3932 17.599 10.967L18.416 11.767C18.742 12.052 19.084 12.318 19.44 12.565C20.061 12.895 20.582 13.391 20.944 13.996C21.215 14.4489 21.3913 14.9521 21.4622 15.4751C21.5331 15.9982 21.4972 16.5301 21.3566 17.0389C21.216 17.5476 20.9737 18.0225 20.6442 18.4349C20.3148 18.8473 19.9051 19.1885 19.44 19.438C19.473 19.371 19.377 19.474 19.44 19.438C18.1838 20.2321 17.1447 21.3258 16.416 22.621C15.6855 23.9184 15.2877 25.3764 15.258 26.865V26.865ZM19.741 5.123C19.741 5.919 19.976 6.698 20.417 7.36C20.8564 8.02107 21.4822 8.53685 22.215 8.842C22.9471 9.14685 23.7534 9.22661 24.5311 9.07112C25.3087 8.91563 26.0224 8.53193 26.581 7.969C27.1413 7.40452 27.5226 6.68728 27.6772 5.9071C27.8318 5.12692 27.7527 4.31848 27.45 3.583C27.1473 2.84836 26.6337 2.2199 25.974 1.777C25.2039 1.26028 24.2779 1.02768 23.355 1.11909C22.4321 1.2105 21.5698 1.62024 20.916 2.278C20.1641 3.034 19.7417 4.05673 19.741 5.123V5.123ZM23.748 22.84C22.956 22.84 22.181 23.076 21.522 23.518C20.8624 23.9609 20.3488 24.5894 20.046 25.324C19.743 26.0596 19.6639 26.8683 19.8185 27.6486C19.9731 28.429 20.3545 29.1464 20.915 29.711C21.4736 30.2739 22.1873 30.6576 22.9649 30.8131C23.7426 30.9686 24.5489 30.8888 25.281 30.584C26.0144 30.2785 26.6406 29.762 27.08 29.1C27.5948 28.3249 27.8261 27.3959 27.735 26.47C27.6439 25.544 27.2359 24.6779 26.58 24.018C26.2088 23.6446 25.7676 23.3482 25.2816 23.1457C24.7957 22.9432 24.2745 22.8386 23.748 22.838V22.84ZM34 15.994C34 15.198 33.765 14.42 33.325 13.758C32.8857 13.0966 32.2599 12.5804 31.527 12.275C30.7948 11.9699 29.9882 11.8901 29.2104 12.0456C28.4325 12.2011 27.7187 12.5849 27.16 13.148C26.5995 13.7126 26.2181 14.43 26.0635 15.2104C25.9089 15.9907 25.988 16.7994 26.291 17.535C26.5937 18.2696 27.1073 18.8981 27.767 19.341C28.4252 19.783 29.2001 20.019 29.993 20.019C30.5195 20.0182 31.0406 19.9136 31.5265 19.7111C32.0125 19.5086 32.4537 19.2123 32.825 18.839C33.577 18.0826 33.9994 17.0596 34 15.993V15.994Z"
                fill="#D97708"
              />
              <path
                d="M5.007 11.969C4.214 11.969 3.44 12.205 2.781 12.647C2.12122 13.0902 1.60759 13.719 1.305 14.454C1.00226 15.1895 0.923236 15.9979 1.07781 16.7781C1.23239 17.5583 1.6137 18.2755 2.174 18.84C2.7334 19.4017 3.44703 19.7845 4.22435 19.9399C5.00167 20.0953 5.80764 20.0164 6.54 19.713C7.27291 19.4075 7.89867 18.8914 8.338 18.23C8.85242 17.4552 9.08362 16.5265 8.99252 15.601C8.90142 14.6754 8.49361 13.8097 7.838 13.15C7.4669 12.7767 7.02585 12.4803 6.54008 12.2776C6.05431 12.075 5.53335 11.9701 5.007 11.969V11.969Z"
                fill="#D97708"
              />
            </svg>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </a>
            <Link href="/pricing">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </Link>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Residential Services
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Commercial Services
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Call Us Today
            </a>
            <button
              type="button"
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              801-111-2323
            </button>
          </Popover.Group>
          {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
              >
                Sign up
              </a>
            </div> */}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-yellow-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/pricing">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>
                </Link>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-600 hover:bg-yellow-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-yellow-600 hover:text-yellow-500">
                    Sign in
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
