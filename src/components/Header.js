import React from "react";

function Header() {
  return (
    <nav class="flex justify-between h-32 shadow-md items-center font-kanit font-bold px-10 ">
      <a
        href="#_"
        class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none uppercase"
      >
        diagnos.
      </a>

      <div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
        <a
          href="ya"
          class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
        >
          Sign in
        </a>
      </div>
    </nav>
  );
}

export default Header;
