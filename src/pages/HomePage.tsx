import { useState } from "react";
import HomeArticleCard from "../components/HomeArticleCard";
import NavbarComponet from "../components/NavbarComponet";
import useUserStore from "../store/userstore";
import Icons from "../utils/icons";
import usePostStore from "../store/poststore";

const HomePage = () => {
  const posts: {
    title: string;
    uuid: string;
    desc: string;
    content: string;
    author: string;
  }[] = usePostStore((state) => state.posts);
  // const [post, setpost] = useState()
  const a = [1, 2, 3, 4];
  return (
    <div>
      <NavbarComponet />
      <div className="w-full mt-2 ">
        <div className="flex justify-center items-center h-4 bg-slate-100 p-5">
          <Icons.flash size={22} />
          <span className="font-medium text-sm md:text-lg">
            Get unlimited access to all of Medium for less than $1/week.
          </span>{" "}
          <span className="ml-3 underline cursor-pointer text-sm md:text-lg">
            Become a member
          </span>{" "}
        </div>
        <section className="w-[80%] m-auto  flex justify-start items-start">
          <div className="content w-full md:w-2/3 border-slate-300 border-r-2 p-3">
            <div className="tabBarWrapper relative">
              <span className="text-slate-300 text-lg p-1 absolute top-1/2 left-0 -translate-y-1/2">
                <Icons.chevronLeft />
              </span>
              <div className="tabBar flex justify-start items-center  border-b-[1px] border-slate-300">
                <span className="text-slate-300 text-2xl p-1 ml-10">+</span>
                <span className="text-black text-md p-3 font-medium border-b-[1px] border-black ">
                  For you
                </span>
                <span className="text-slate-300 text-md p-3 ">Following</span>
                <span className="text-slate-300 text-md p-3 ">NodeJs</span>
              </div>
              <span className="text-slate-300 text-lg p-1 absolute top-1/2 right-0 -translate-y-1/2">
                <Icons.chevronRight />
              </span>
            </div>
            <div className="flex-initial w-full bg-white">
              <div className="article_wrapper">
                {posts.map((item) => (
                  <HomeArticleCard data={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="suggestions w-1/3 sticky top-0 right-0 p-5 hidden md:block">
            <div className="text-black font-medium my-4">
              Staff Picks:Pride Month
            </div>

            <div className="mb-3">
              <li className="list-none flex justify-start items-center">
                <img
                  src="https://picsum.photos/536/354"
                  alt=""
                  className="w-7 h-7 rounded-full mr-3"
                />
                <div className="text-black font-medium text-sm">
                  Lee Fischman in UX Collective
                </div>
              </li>
              <div className="text-black font-bold my-1">
                On the nature of elegance
              </div>
            </div>
            <div className="mb-3">
              <li className="list-none flex justify-start items-center">
                <img
                  src="https://picsum.photos/536/354"
                  alt=""
                  className="w-7 h-7 rounded-full mr-3"
                />
                <div className="text-black font-medium text-sm">
                  Lee Fischman in UX Collective
                </div>
              </li>
              <div className="text-black font-bold my-1">
                On the nature of elegance
              </div>
            </div>
            <div className="mb-3">
              <li className="list-none flex justify-start items-center">
                <img
                  src="https://picsum.photos/536/354"
                  alt=""
                  className="w-7 h-7 rounded-full mr-3"
                />
                <div className="text-black font-medium text-sm">
                  Lee Fischman in UX Collective
                </div>
              </li>
              <div className="text-black font-bold my-1">
                On the nature of elegance
              </div>
            </div>
            <div className="text-green-800 text-sm">see the full list</div>
            <div className="social flex flex-col justify-center items-center p-7">
              <div className="flex justify-center items-center">
                <img
                  src="https://picsum.photos/536/354"
                  alt=""
                  className="w-7 h-7 rounded-full mr-3"
                />
                <span>+</span>
                <div className="text-black font-medium text-sm">
                  <Icons.twitter size={22} color="skyblue" />
                </div>
              </div>
              <div className="w-1/2 text-center my-4">
                Discover Medium writers you already follow on Twitter.
              </div>
              <button className="flex justify-center items-center border-[1px] border-black rounded-full py-3 px-6">
                <Icons.twitter size={22} color="skyblue" className="mr-3" />
                <span>Connect to twitter</span>
              </button>
            </div>
            <div className="text-black font-medium my-4">Recommendation</div>
            <div className="flex flex-wrap">
              {a.map((item) => (
                <span className="text-slate-700 bg-slate-100 rounded-3xl py-2 px-5 m-2 font-medium cursor-pointer ">
                  Technical
                </span>
              ))}
            </div>
            <button className="font-medium text-sm text-green-700 my-2">
              See more topics
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
