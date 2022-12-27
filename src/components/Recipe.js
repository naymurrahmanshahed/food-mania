import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe flex flex-col w-80  overflow-hidden p-5 bg-white/75 shadow-xl shadow-red-100 gap-5 border-2 rounded-2xl border-white">
      <div className="recipe-img h-40 flex justify-center  overflow-hidden items-center rounded-xl">
        <img src={recipe.image_url} className="w-full block  " alt="" />
      </div>
      <div className="recipe-text">
        <span className="recipe-publisher text-sm text-cyan-500 font-medium">
          {recipe.publisher}
        </span>
        <h4 className="recipe-title text-2xl truncate font-semibold">
          {recipe.title}
        </h4>
        <Link
          to="/"
          className="text-red-50 p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-2 bg-gradient-to-br from-red-400 to-red-500  inline-block  shadow-md  shadow-red-200 hover:shadow-lg hover:shadow-red-300 "
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
