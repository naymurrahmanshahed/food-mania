import { Link } from "react-router-dom";
import FryingPan from "./FryingPan";

const NotFound = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <h2 className="lg:text-4xl text-xl text-center text-red-300 font-semibold">
        Page are not found.
      </h2>

      <Link
        to="/"
        className="bg-cyan-500 text-cyan-50 p-3 px-8 rounded-full uppercase inline-block mt-2 shadow-lg shadow-cyand-200 hover:bg-cyan-400 hover:text-gray-50 hover:shadow-gray-300 duration-300"
      >
        Go To Home
      </Link>
      <FryingPan />
    </div>
  );
};

export default NotFound;
