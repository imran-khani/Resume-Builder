import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./Layout/RootLayout";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default App;
