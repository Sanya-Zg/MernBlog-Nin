import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const Layout = () => {
  return (
    <>
        <Navbar />
        <main className="pages">
            <Outlet />
        </main>
        <footer></footer>
    </>
  )
}
export default Layout