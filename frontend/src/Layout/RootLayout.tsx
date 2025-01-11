import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative flex justify-center min-h-screen bg-transparent bg-[url('bg.jpg')] bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
