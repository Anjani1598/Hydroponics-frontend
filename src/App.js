import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ApplicationRouts from "./Routes/ApplicationRouts";


function App() {
  return (
    <>
      <BrowserRouter>

      <ApplicationRouts />

      </BrowserRouter>
    </>
  );
}

export default App;
