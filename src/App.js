import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import { useCheckUserSession } from "./hooks/useCheckUserSession";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner/Spinner";

// Dynamic Imports
const Home = lazy(() => import("./routes/Home/Home"));
const Shop = lazy(() => import("./routes/Shop/Shop"));
const Authentication = lazy(() =>
  import("./routes/Authentication/Authentication")
);
const Checkout = lazy(() => import("./routes/Checkout/Checkout"));

const App = () => {
  useCheckUserSession();

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
