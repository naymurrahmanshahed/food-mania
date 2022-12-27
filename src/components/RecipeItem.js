import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataFetch } from "../hook/useDataFetch";

const RecipeItem = ({ handleFavourites, saveItem }) => {
  const [itemSaveStatus, setItemSaveStatus] = useState(null);
  const { id } = useParams();

  const { data, loading, error } = useDataFetch(id);

  const durationCalc = (duration) => {
    if (!duration) return null;
    if (!String(duration).includes(".")) {
      return duration + "h";
    }
    if (String(duration).includes(".")) {
      const splitDuration = String(duration).split(".");

      const hours = splitDuration[0] + "h";

      const miniutes = String(+(splitDuration[1] / 100) * 60).split(".");
      const min = miniutes[0] + "min";

      return hours + min;
    }
  };
  useEffect(() => {
    if (!data) return null;
    setItemSaveStatus(saveItem.some((item) => item.id === data.id));
  }, [data]);
  return (
    <>
      {loading && data ? (
        <p className="text-center">{error ? error : "...loading"}</p>
      ) : (
        <>
          <div className="recipe-item container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="left row-start-2 lg:row-start-auto ">
              <div className="singleItemImage h-96 overflow-hidden rounded-xl group  ">
                <img
                  src={data.image_url}
                  className=" w-full h-full object-cover block group-hover:scale-105 duration-300"
                  alt=""
                />
              </div>
              <div className="ingredients  mt-4 ">
                <span className="text-2xl font-semibold text-red-500 ">
                  Ingredients:
                </span>
                <ul className="flex flex-col gap-3">
                  {data?.ingredients?.map((ingredient, i) => (
                    <li key={i}>
                      <span className="font-bold text-2xl text-red-300 ">
                        ✓{" "}
                      </span>
                      <span className="font-semibold text-red-400">
                        {ingredient.quantity} {ingredient.unit}
                      </span>
                      <span> {ingredient.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right flex flex-col gap-3">
              <span className="recipe-publisher text-sm text-cyan-500 font-medium">
                {data.publisher}
              </span>
              <h2 className="recipe-title text-4xl truncate font-semibold text-red-500">
                {data.title}
              </h2>
              <div className="serving_cooking-time flex gap-5 uppercase tracking-widest font-semibold text-rose-300">
                <div className="servings">Servings: {data.servings} people</div>
                <div className="cooking-time">
                  Cooking Time:
                  {data?.cooking_time < 60
                    ? String(data.cooking_time) + "min"
                    : durationCalc(data?.cooking_time / 60)}
                </div>
              </div>

              <div className="btns flex gap-5">
                <button
                  onClick={() => handleFavourites(data?.id)}
                  className={`text-red-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 bg-gradient-to-br ${
                    itemSaveStatus
                      ? "from-rose-400 to-rose-500  inline-block  shadow-md  shadow-rose-200 hover:shadow-lg hover:shadow-rose-300"
                      : "from-cyan-400 to-cyan-500  inline-block  shadow-md  shadow-cyan-200 hover:shadow-lg hover:shadow-cyan-300"
                  }`}
                >
                  {itemSaveStatus
                    ? "- Remove from favourites"
                    : "+ Save as favourite"}
                </button>
                <button className="text-red-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 bg-gradient-to-br from-orange-400 to-orange-500  inline-block  shadow-md  shadow-orange-200 hover:shadow-lg hover:shadow-orange-300">
                  Get Directions
                </button>
                <button className="text-red-50 p-3 px-8 rounded-lg text-xs uppercase font-medium tracking-wider mt-2 bg-gradient-to-br from-red-400 to-red-500  inline-block  shadow-md  shadow-red-200 hover:shadow-lg hover:shadow-red-300">
                  Go Home
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RecipeItem;
