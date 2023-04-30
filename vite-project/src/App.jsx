import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Button from "./components/Button";
import Input from "./components/Input";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/button" element={<Button />} />
          <Route path="/input" element={<Input />} />
          <Route path="/header" element={<Header />} />
          <Route path="/tabs" element={<Tabs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
