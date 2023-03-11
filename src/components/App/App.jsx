import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getCategories } from "../../redux/slices/categoriesSlice";
import { getProducts } from "../../redux/slices/productsSlice";

import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { AppRoutes } from "../Routes/Routes";
import { Sidebar } from "../Sidebar/Sidebar";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
