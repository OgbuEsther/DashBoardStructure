import React from "react";
import { useRoutes } from "react-router-dom";
import HomeScreen from "../HomeScreen";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";

const HomeRoutes = () => {
  let elements = useRoutes([
    {
      path: "/",
      element: <HomeScreen />,
    },
  ]);
  return (
    <div>
      <Header />
      {elements}
      <Footer />
    </div>
  );
};

export default HomeRoutes;
