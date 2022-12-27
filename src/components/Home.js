import Recipe from "./Recipe";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipes.length === 0 && !loading && !error ? (
        <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold">
          Nothing to show, please search something!
        </p>
      ) : null}
      {loading && <p>{error ? error : "loading..."}</p>}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
