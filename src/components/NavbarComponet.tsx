import { useState } from "react";
import useUserStore from "../store/userstore";
import Icons from "../utils/icons";
import { Link } from "react-router-dom";
const logo = "https://cdn-icons-png.flaticon.com/512/5968/5968885.png";
const NavbarComponet = () => {
  const [profileTap, setprofileTap] = useState(false);
  const signout = useUserStore((state) => state.signout);
  return (
    <div className="navbar-component w-full">
      <div className="navbar-component-wrapper h-20 flex justify-between items-center bg-white border-b-[1px] border-black px-5 md:px-20 ">
        <div className="logo flex justify-start items-center">
          <img src={logo} alt="" className="w-9 h-9 rounded-full mr-3" />
          <div className="search hidden md:flex justify-start items-center bg-slate-100 rounded-lg px-2">
            <Icons.search />
            <input
              type="search"
              placeholder="Search Articles"
              className="outline-none p-2 rounded-lg bg-transparent"
            />
          </div>
        </div>
        <nav className="flex justify-between items-center w-1/2 md:w-1/6">
          <span className="flex justify-center items-center">
            <Icons.write size={22} />
            <span className="ml-3">
              <Link to="/editor">write</Link>
            </span>
          </span>
          <span className="flex justify-center items-center">
            <Icons.bell size={22} />
          </span>
          <span
            className="relative cursor-pointer"
            onClick={() => setprofileTap(!profileTap)}
          >
            <span className="flex justify-center items-center">
              <img
                src={logo}
                alt=""
                className="w-9 h-9 rounded-full mr-3 ring-2 ring-slate-200"
              />
              <Icons.chevronDown size={12} />
            </span>
            {profileTap && (
              <ul className=" bg-white shadow-lg absolute top-full right-0 w-52 z-10">
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2">
                  <Icons.user size={22} />
                  <span className="ml-3">Profile</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2">
                  <Icons.library size={22} />
                  <span className="ml-3">Library</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2">
                  <Icons.note size={22} />
                  <span className="ml-3">Story</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2">
                  <Icons.stats size={22} />
                  <span className="ml-3">Stats</span>
                </li>
                <div className="p-1 font-medium bg-slate-50">Setting</div>
                <li
                  onClick={() => signout()}
                  className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2"
                >
                  <Icons.logout size={22} />
                  <span className="ml-3">Log out</span>
                </li>
              </ul>
            )}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default NavbarComponet;
