import { useState } from "react";
import useUserStore from "../store/userstore";
import Icons from "../utils/icons";
import usePostStore from "../store/poststore";
type Props = {
  addPost: {
    title: string;

    desc: string;
    content: string;
    author: string;
  };
};
const logo = "https://cdn-icons-png.flaticon.com/512/5968/5968885.png";
const NewPostNavbar = (props: Props) => {
  const [profileTap, setprofileTap] = useState(false);
  const signout = useUserStore((state) => state.signout);
  const addPost = usePostStore((state) => state.addPost);
  const isLoading = usePostStore((state) => state.isLoading);

  console.log(props.addPost.title);

  return (
    <div className="navbar-component">
      <div className="navbar-component-wrapper h-20 flex justify-between items-center bg-white border-b-[1px] border-black px-5 md:px-20">
        <div className="logo flex justify-start items-center">
          <img src={logo} alt="" className="w-9 h-9 rounded-full mr-3" />
          <div className="text-slate-400 text-sm font-medium">
            Draft in Erspirite
          </div>
        </div>
        <nav className="flex justify-between items-center w-1/2 md:w-1/6">
          <button
            disabled={
              props.addPost.title === "" ||
              props.addPost.content === "" ||
              isLoading == true
                ? true
                : false
            }
            onClick={() => {
              addPost({
                title: props.addPost.title,
                content: props.addPost.content,

                author: props.addPost.author,
                desc: props.addPost.desc,
              });
            }}
            className="rounded-lg bg-green-400 px-3 py-1 text-sm font-medium text-white disabled:bg-green-200"
          >
            Publish
          </button>
          <span>
            <Icons.horizontalMenu />
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
              <ul className=" bg-white shadow-lg absolute top-full right-0 w-52 border-slate-300 border-[1px]">
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-5">
                  <img
                    src={logo}
                    alt=""
                    className="w-9 h-9 rounded-full mr-3 ring-black ring-1"
                  />
                  <div className="ml-3">
                    <div className="text-black font-bold">Erspirite</div>
                    <div>prem.com</div>
                  </div>
                </li>
                <hr />
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">write story</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Stats</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Settings</span>
                </li>

                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Stories</span>
                </li>
                <hr />
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Library</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Publications</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Control your recommendations</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-slate-400 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Medium Partner program</span>
                </li>
                <hr />
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-green-600 px-5 py-2 text-sm capitalize">
                  <span className="ml-3">Become a member</span>
                </li>
                <li className="flex items-center justify-start hover:bg-slate-50 hover:text-slate-600 my-1 text-green-600 px-5 py-2 text-sm capitalize">
                  <span className="ml-3" onClick={() => signout()}>
                    Sign out
                  </span>
                </li>
              </ul>
            )}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default NewPostNavbar;
