import { Container } from "./globalStyles";
import Header from "./components/header";
import MainRoutes from "./routes";
import { getCategoryByType } from "./utils/graphql-filters";
import { FilterType } from "./contexts/filter-context/types";
import { useFilter } from "./contexts/filter-context/filterContext";

const App = () => {
  const { type } = useFilter();
  console.log(getCategoryByType(type));
  return (
    <>
      <Header />
      <Container>
        <MainRoutes />
      </Container>
    </>
  );
};

export default App;
