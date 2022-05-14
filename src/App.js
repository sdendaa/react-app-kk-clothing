import "./App.css";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Shop from "./components/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
