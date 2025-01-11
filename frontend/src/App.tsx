import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="relative flex justify-center min-h-screen bg-transparent bg-[url('bg.jpg')] bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
};

export default App;
