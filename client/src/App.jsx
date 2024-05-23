import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import HomePage from "./Pages/HomePage";
import AddProductPages from "./Pages/AddProductPages";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<AddProductPages />} />
        <Route path="/products/id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
