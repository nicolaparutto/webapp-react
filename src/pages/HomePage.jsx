import { useEffect } from "react"
import { useGlobalDataContext } from "../context/globalContext";



function HomePage() {

   const { fetchMovies, movieData } = useGlobalDataContext();

   useEffect(() => {
      fetchMovies()
   }, [])

   return (
      <section className="container">
         <h1>Lista dei film</h1>
         <div className="movies-list">
            {movieData.map(movie => (
               <div key={movie.id} className="movie-card">
                  <div className="movie-content">
                     <div className="card-img">
                        <img src={movie.image} alt="" />
                     </div>
                     <div className="card-text">
                        <h2>{movie.title}</h2>

                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   )
}

export default HomePage