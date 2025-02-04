import { Outlet } from "react-router-dom"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavigationBar />

        <main>
            <Outlet />
        </main>
      
        <Footer />
    </div>
  )
}

export default Layout
