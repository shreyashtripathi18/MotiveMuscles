import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed top-0 left-0 w-full h-16 bg-transparent z-50 mx-auto md:px-20 px-4 flex justify-between items-center">
        <div className="navbar-start ">
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2 bg-slate-600">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img
            className="w-72"
            src="https://tebewebe.online/motivemuscle/wp-content/uploads/sites/69/2023/12/Logo_MotiveMuscle_2.png"
            alt="Logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 font-semibold text-lg gap-8">
            <li>
              <a href="#home">Homepage</a>
            </li>
            <li>
              <details>
                <summary>Classes</summary>
                <ul className="p-2 bg-slate-600">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#trainers">Trainers</a>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 bg-slate-600">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="#join"
            className="btn px-6 rounded-none text-base bg-orange-400 text-white hover:bg-orange-500">
            Join Membership
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
