import { useEffect, useState } from "react";
import Icons from "../utils/icons";
import useUserStore from "../store/userstore";
interface LoginComponentProps {
  onClick: (value: boolean) => void;
}
const googleLogo =
  "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png";
const LoginComponent = ({ onClick }: LoginComponentProps) => {
  const [option, setoption] = useState(false);
  const [disabled, setdisabled] = useState(true);
  const [email, setemail] = useState("");
  const signup = useUserStore((state) => state.login);
  const isLoading = useUserStore((state) => state.isLoading);
  const handleSubmit = () => {
    signup(email, "Abc123@");
    setdisabled(false);
    onClick(false);
  };
  useEffect(() => {
    setdisabled(isLoading);
  }, [isLoading]);

  return (
    <div className="login-component w-screen h-screen z-20 flex justify-center items-center fixed bg-slate-200 backdrop-filter  bg-opacity-70  top-0 left-0">
      {!option ? (
        <div className="box w-1/3 h-auto relative bg-white rounded-lg flex flex-col items-center p-5 shadow-lg ">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => onClick(false)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="text-3xl text-center my-7 font-serif">
            Join Medium
          </div>
          <div className="options w-1/2 my-4">
            <button className="w-full border-[1px] border-black rounded-full my-3 px-5 py-2 flex justify-start items-center">
              <img src={googleLogo} alt="" className="w-5 h-5 mr-5" />
              <span className="font-medium text-sm">Sign in with Google</span>
            </button>
            <button
              onClick={() => setoption(true)}
              className="w-full border-[1px] border-black rounded-full my-3 px-5 py-2 flex justify-start items-center"
            >
              <Icons.email className="mr-5" />
              <span className="font-medium text-sm">Sign in with Email</span>
            </button>
          </div>
          <button className="font-medium text-slate-300">
            No account? <span className="text-green-700">Create one</span>
          </button>
        </div>
      ) : (
        <div className="box w-1/3 h-auto relative bg-white rounded-lg flex flex-col items-center p-5 shadow-lg ">
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => onClick(false)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="text-3xl text-center my-7 font-serif">
            Sign up with Email
          </div>
          <div className="font-medium text-center">
            Enter your email address to create an account
          </div>
          <div className="options w-1/2 my-4 flex justify-center items-center flex-col">
            <small className="text-center">Your Email</small>
            <input
              type="email"
              onChange={(e) => {
                /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.target.value)
                  ? setdisabled(false)
                  : setdisabled(true);
                setemail(e.target.value);
              }}
              className="border-b-[1px] border-black my-5 outline-none p-2 invalid:border-pink-500 invalid:text-pink-600
               valid:border-green-700 valid:text-green-700"
            />
            <button
              disabled={disabled}
              onClick={handleSubmit}
              className="w-full border-[1px] disabled:opacity-20 bg-black text-white rounded-full my-3 px-5 py-2 flex justify-center items-center"
            >
              continue
            </button>
          </div>
          <button
            className="font-medium text-green-700"
            onClick={() => setoption(false)}
          >
            &lt; Sign up options
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginComponent;
