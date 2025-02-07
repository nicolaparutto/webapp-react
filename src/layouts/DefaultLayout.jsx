import { Outlet } from "react-router-dom";



function DefaultLayout() {

   return (
      <>
         <header>
            HEADER
         </header>

         <main>
            <Outlet />
         </main>

         <footer>
            FOOTER
         </footer>
      </>
   )

}

export default DefaultLayout