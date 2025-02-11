import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


function DefaultLayout() {

   return (
      <>
         <header>
            <NavBar />
         </header>
         <hr />
         <main>
            <Outlet />
         </main>
         <hr />
         <footer>
            FOOTER
         </footer>
      </>
   )

}

export default DefaultLayout