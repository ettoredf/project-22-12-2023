import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyMain from "./components/MyMain";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNavBar />
      <Container fluid>
        <MyMain />
        <MyFooter />
      </Container>
    </>
  );
}

export default App;
