import { useEffect, useState } from "react";

export const useDataFetch = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const getRecipeData = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        if (!res.ok) throw new Error("Something Went wrong");
        const data = await res.json();
        setLoading(false);
        setData(data?.data?.recipe);
      } catch (err) {
        setError(err.message);
      }
    };
    getRecipeData();
  }, []);

  return { data, loading, error };
};
