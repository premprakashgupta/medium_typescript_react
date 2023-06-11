import { useEffect, useState } from "react";

import logo from "../assets/medium_logo.png";
import certificate from "../assets/undraw_certificate_re_yadi.svg";
import HomeTrending from "../components/HomeTrending";
import { trending } from "../db/data_set";
import HomeArticleCard from "../components/HomeArticleCard";
import { Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import useUserStore from "../store/userstore";
import usePostStore from "../store/poststore";
const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loginBox, setloginBox] = useState(false);
  const email = useUserStore((state) => state.user?.email);
  const signout = useUserStore((state) => state.signout);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    loginBox
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loginBox]);
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const posts: {
    title: string;
    uuid: string;
    desc: string;
    content: string;
    author: string;
  }[] = usePostStore((state) => state.posts);
  return (
    <div className="home h-auto">
      <div
        className={`header_wrapper ${
          scrollPosition > 2
            ? scrollPosition > 550
              ? " bg-white"
              : " bg-amber-400"
            : "bg-amber-400"
        } sticky top-0 z-10  w-full h-20 ease-in-out duration-300 px-3 md:px-24 flex justify-between items-center border-b-[1px] border-black`}
      >
        <div className="logo h-7 w-7">
          <img className="inline-block h-11 max-w-none" src={logo} alt="" />
        </div>
        <nav className="w-[70%] lg:w-[40%] h-full hidden md:flex justify-evenly items-center text-black font-medium text-sm">
          <Link to="#">Our story</Link>
          <Link to="#">Membership</Link>
          <Link to="#">Write</Link>
          {email != null ? (
            <span className="group relative cursor-pointer">
              {email}
              <span
                onClick={() => signout()}
                className="hidden group-hover:block absolute top-full cursor-pointer"
              >
                sign out
              </span>
            </span>
          ) : (
            <button onClick={() => setloginBox(true)}>Sign in</button>
          )}
          <button
            className={`p-3 rounded-3xl ${
              scrollPosition > 550 ? "bg-green-700" : "bg-black"
            } text-white font-semibold  text-sm`}
          >
            Get started
          </button>
        </nav>
      </div>

      <div className="flex bg-amber-400 h-[550px] border-black  border-b-[1px]">
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <div className="content w-[90%] md:w-[70%]">
            <h1 className="my-[10%] text-7xl md:text-8xl tracking-tighter font-serif">
              Stay curious.
            </h1>
            <p className="my-7 text-2xl font-medium text-gray-600">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <button className="p-2 w-[220px] rounded-3xl text-white font-semibold bg-black text-lg tracking-wide">
              Start Reading
            </button>
          </div>
        </div>
        <div className=" flex-1 justify-center items-center hidden md:flex">
          <img className="h-[70%]" src={certificate} alt="" />
        </div>
      </div>
      <section className="w-full p-2 md:w-[80%] mx-auto my-8">
        <div>
          <p className="font-medium ">Trending on Medium</p>
        </div>
        <div className="flex flex-wrap">
          {trending.map((item, index) => (
            <HomeTrending data={item} index={index} key={index} />
          ))}
        </div>
        <hr />
        <div className="flex justify-between md:flex-row flex-col-reverse my-5">
          <div className="flex-initial w-full md:w-[50%] bg-white">
            <div className="article_wrapper h-[590px] overflow-y-scroll">
              <ul className="list-none">
                {posts.map((item) => (
                  <HomeArticleCard data={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-initial w-full md:w-[40%]">
            <div className="font-bold text-lg my-5">
              Discover more of what matters to you
            </div>
            <div className="flex flex-wrap">
              {a.map((item) => (
                <span className="bg-slate-100 rounded-3xl py-2 px-5 m-2 font-medium cursor-pointer ">
                  Technical
                </span>
              ))}
            </div>
            <button className="font-medium text-sm text-green-700 my-2">
              See more topics
            </button>
            <hr className="mt-5" />
            <div className="flex flex-wrap p-3">
              {a.map((item) => (
                <small className="font-medium text-gray-300 m-2 cursor-pointer">
                  Discover
                </small>
              ))}
            </div>
          </div>
        </div>
      </section>
      {loginBox && <LoginComponent onClick={setloginBox} />}
    </div>
  );
};

export default LandingPage;
