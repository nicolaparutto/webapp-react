import { useEffect } from "react"
import { useGlobalDataContext } from "../context/globalContext";
import { Link } from "react-router-dom";


function HomePage() {

   const { fetchMovies, moviesData } = useGlobalDataContext();

   useEffect(() => {
      fetchMovies()
   }, [])

   return (
      <section className="container">
         <h1>Lista dei film</h1>
         <div className="movies-list">
            {moviesData.map(movie => (
               <div key={movie.id} className="movie-card">
                  <div className="movies-content">
                     <div className="card-img">
                        <img src={movie.image} alt="" />
                     </div>
                     <div className="card-text">
                        <h2>{movie.title}</h2>
                        <Link to={`/movie-detail/${movie.id}`} className="btn">Vedi Dettagli</Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default HomePage