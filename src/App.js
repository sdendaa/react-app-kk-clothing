import "./App.css";
import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.component";
import Shop from "./components/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUpForm from "./components/Sign Up/sign-up-form.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="sign-up" element={<SignUpForm />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
