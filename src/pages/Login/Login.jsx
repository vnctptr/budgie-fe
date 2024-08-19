import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
const Login = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="card bg-white text-primary-content w-96 mx-auto my-auto">
          <div className="card-body">
            <div className="mb-2">
              <h1 className="text-center font-semibold text-2xl">Log in</h1>
              <p className="text-center">Or sign up, idc...</p>
            </div>
            <label className="input input-ghost bg-gray-100 flex items-center gap-2">
              <MdEmail className="h-4 w-4 opacity-70" />
              <input
                type="text"
                className="grow text-black"
                placeholder="Email"
              />
            </label>
            <label className="input input-ghost bg-gray-100 flex items-center gap-2">
              <FaKey className="h-4 w-4 opacity-70" />
              <input type="password" className="grow" value="password" />
            </label>
            <div className="card-actions justify-end mt-2">
              <button className="btn btn-wide">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
