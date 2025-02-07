import { Outlet } from "react-router-dom";



function DefaultLayout() {

   return (
      <>
         <header>
            HEADER
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