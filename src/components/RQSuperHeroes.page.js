import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const RQSuperHeroesPage = () => {
  const fetchHeroes = () => {
    return axios.get("http://localhost:4000/superheroes");
  };
  const { isLoading, data } = useQuery("super-heroes", fetchHeroes);
  if (isLoading) {
    return <h2>Loading ...!</h2>;
  }

  return (
    <div>
      <h2>RQ Super Heroes </h2>
      {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
};
