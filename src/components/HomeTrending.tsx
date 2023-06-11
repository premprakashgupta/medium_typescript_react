interface TrendingData {
  profile_pic: string;
  username: string;
  article_name: string;
  date: string;
}
interface HomeTrendingProps {
  data: TrendingData;
  index: number;
}
const HomeTrending = ({ data, index }: HomeTrendingProps) => {
  return (
    <div className="trending_card w-[380px] m-3">
      <div className="trending_wrapper flex justify-start">
        <span className="mr-5 text-3xl text-slate-200 font-semibold ">{`0${
          index + 1
        }`}</span>
        <span>
          <div className="flex justify-start items-center mt-2">
            <img
              src={data.profile_pic}
              alt="profile_pic"
              className="w-7 h-7 rounded-full ring-2 ring-black mr-3"
            />
            <div className="username group font-medium text-sm relative">
              <span>{data.username}</span>
              <span className="w-[300px] h-auto group-hover:block hidden p-3 absolute top-0 left-[-205%] md:left-full z-10 bg-white shadow-md">
                <div className="flex justify-start items-center mb-1">
                  <img
                    src="https://picsum.photos/536/354"
                    alt=""
                    className="rounded-full w-10 h-10 ring-2 ring-black mr-5"
                  />
                  <div className="font-medium text-lg">{data.username}</div>
                </div>
                <div className="font-normal text-xs text-slate-300 my-2">
                  {data.article_name}
                </div>
                <hr className="my-1" />
                <div className="flex justify-between items-center py-2 px-3">
                  <span>Followers 2.2k</span>
                  <button className="bg-green-700 rounded-lg p-1 text-white">
                    Follow
                  </button>
                </div>
              </span>
            </div>
          </div>
          <div className="font-bold text-md mt-1 overflow-hidden text-ellipsis">
            {data.article_name}
          </div>
          <div className="flex justify-start items-center mt-2">
            <span className="date mr-4 text-xs  text-slate-300">
              {data.date}
            </span>
            <span className="date text-xs  text-slate-300">7 read</span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomeTrending;
