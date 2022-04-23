import React, { useState, useEffect } from "react";
import axios from "axios";

export const SuperHeroesPage = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        console.log("res", res.data);
        setdata(res.data);
        setloading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  if (loading) {
    return <h2>Loading ...!</h2>;
  }

  return (
    <div>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
};
