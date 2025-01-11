import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./Layout/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
