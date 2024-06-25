import { Container } from "./globalStyles";
import Header from "./components/header";
import MainRoutes from "./routes";

const App = () => {
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
