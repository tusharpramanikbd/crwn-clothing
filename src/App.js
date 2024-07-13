import Home from "./routes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";
import { useEffect } from "react";
// import { checkUserSession } from "./store/user/userAction";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth/cordova";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebaseUtil";
import { setCurrentUser } from "./store/user/userReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      dispatch(setCurrentUser());
    });
    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
