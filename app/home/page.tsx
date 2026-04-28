"use client";

import { useData } from "../contexts/AppContext";

const HomePage = () => {
  const { userLogged } = useData();

  if (!userLogged) return null;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
export default HomePage;
