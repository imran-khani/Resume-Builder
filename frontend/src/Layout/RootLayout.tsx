import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative flex justify-center min-h-screen bg-transparent bg-[url('bg.jpg')] bg-no-repeat bg-cover">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
      {/* Wrap Outlet with a z-index container */}
      <div className="relative z-10 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
