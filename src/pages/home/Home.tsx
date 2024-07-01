import FilterBar from "../../components/filter-bar";
import ProductsList from "../../components/products-list";
import SkeletonCard from "../../components/skeleton/skeleton-card/SkeletonCard";
import { useProducts } from "../../hooks/useProducts";

const Home = () => {
  const { isLoading } = useProducts();
  return (
    <>
      <FilterBar />
      {isLoading ? <SkeletonCard cards={10} /> : <ProductsList />}
    </>
  );
};

export default Home;
