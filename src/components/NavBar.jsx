import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
function NavBar() {
   return (
      <section>
         <div className="nav-container">
            <div className="nav-left">
               <div className="logo">
                  LOGO
               </div>
               <nav>
                  <ul>
                     <li><NavLink to='/home'>Home</NavLink></li>
                     <li><NavLink to=''>Film</NavLink></li>
                     <li><NavLink to=''>La Mia Lista</NavLink></li>
                  </ul>
               </nav>
            </div>
            <div className="nav-right">
               <button className="btn"><Link to='/add-movie'>Aggiungi un film</Link></button>
            </div>
         </div>
      </section>
   )
}

export default NavBar