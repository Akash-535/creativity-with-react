import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CreativityOne from "./components/creativity-one/CreativityOne";
import CreativityTwo from "./components/creativity-two/CreativityTwo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreativityTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
