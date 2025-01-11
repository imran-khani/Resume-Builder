import { Outlet } from "react-router"

const ResumeLayout = () => {
  return (
    <div 
     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
        <Outlet />
    </div>
  )
}

export default ResumeLayout