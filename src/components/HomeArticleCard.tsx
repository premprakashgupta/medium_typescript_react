import { Link } from "react-router-dom";
import Icons from "../utils/icons";
type Props = {
  data: {
    title: string;
    uuid: string;
    desc: string;
    content: string;
    author: string;
  };
};
const HomeArticleCard = (props: Props) => {
  return (
    <li className="h-auto w-full bg-white hover:bg-slate-100 cursor-pointer my-3 p-3 flex items-center justify-between border-b-[1px] border-slate-200">
      <div>
        <div className="flex justify-start items-center ">
          <img
            src="https://picsum.photos/536/354"
            alt="profile pic"
            className="rounded-full w-8 h-8 ring-slate-400"
          />
          <div className="username font-medium text-sm ml-5">
            Medium Staff in 3 Min read
          </div>
        </div>
        <div className="font-bold text-lg ">
          <Link to={`/preview/${props.data?.uuid}`}>{props.data?.title}</Link>
        </div>
        <div
          className="font-normal text-md text-slate-400"
          dangerouslySetInnerHTML={{
            __html: props.data?.content.substring(0, 100),
          }}
        ></div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex justify-between items-center text-xs text-slate-400 list-disc w-[50%]">
            <li className="list-none">Apr 26</li>
            <li>4 min read</li>
            <li className="bg-slate-100 rounded-lg py-1 px-2">Medium</li>
          </div>
          <div className="w-auto">
            <Icons.bookmark />
          </div>
        </div>
      </div>
      <div className="w-1/3 h-[150px] ml-2">
        <img
          src="https://picsum.photos/536/354"
          alt="img"
          className="rounded-lg w-full h-full"
        />
      </div>
    </li>
  );
};

export default HomeArticleCard;
