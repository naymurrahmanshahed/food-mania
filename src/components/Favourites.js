import Recipe from "./Recipe";

const Favourites = ({ saveItem }) => {
  return (
    <div className="favourites">
      {saveItem.length === 0 && (
        <p className="lg:text-4xl text-xl text-center text-red-300 font-semibold">
          Favourites list is empty
        </p>
      )}
      <div className="favourite container mx-auto py-5 flex flex-wrap justify-center gap-5">
        {saveItem.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
