import "./App.css";
import { FormData } from "./Components/Form";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
      <FormData />
    </>
  );
}

export default App;
