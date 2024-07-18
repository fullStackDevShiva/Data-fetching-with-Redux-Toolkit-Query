import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/AppHome";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App page-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
