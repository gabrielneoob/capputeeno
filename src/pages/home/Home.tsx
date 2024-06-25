import React from "react";
import FilterBar from "../../components/filter-bar";
import ProductsList from "../../components/products-list";

const Home = () => {
  return (
    <>
      <FilterBar />
      <ProductsList />
    </>
  );
};

export default Home;
