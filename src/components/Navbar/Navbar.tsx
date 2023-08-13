import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const ulItems = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Our Products</a>
      </li>
      <li>
        <a>Resources</a>
      </li>
      <li>
        <a>Contacts</a>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-[#2B63D9] w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {ulItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {" "}
            <Image
              src="/logo.png"
              alt=" Logo"
              width={120}
              height={70}
              priority
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{ulItems}</ul>
        </div>
        <div className="navbar-end">
          <Link href="/" className="">
            Log in
          </Link>
          <Link
            href="/"
            className="btn mx-2 bg-[#2464ee] border-0 text-white hover:bg-[#407bfa]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
