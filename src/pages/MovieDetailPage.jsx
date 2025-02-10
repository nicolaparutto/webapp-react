import { useGlobalDataContext } from "../context/globalContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import StarsRating from "../components/StarsRating";

function MovieDetailPage() {

   const { id } = useParams();

   const { movieData, fetchMovie } = useGlobalDataContext();

   useEffect(() => {
      fetchMovie(id);
   }, [])

   return (
      <section className="container">
         {movieData.map(movie => (
            <div key={movie.id} className="movie-detail">
               <div className="movie-content">
                  <div className="movie-img">
                     <img src={movie.image} alt="" />
                  </div>
                  <div className="movie-text">
                     <h1>{movie.title}</h1>
                     <span>Diretto da: {movie.director}</span>
                     <p>Anno di rilascio: {movie.release_year}</p>
                     <p>{movie.abstract}</p>
                  </div>

               </div>

               <Link to='/' className="btn d-block text-center">Torna alla Lista</Link>

               <div className="movie-reviews">
                  <h3>Recensioni</h3>
                  {movie.reviews.map(review => (
                     <div key={review.id} className="review-container">
                        <p>Scritto da: {review.name}</p>
                        <StarsRating vote={review.vote} />
                        <p>{review.text}</p>
                     </div>
                  ))}
                  <button className="btn d-block"><Link to="/new-review">Aggiungi una recensione</Link></button>
               </div>
            </div>
         ))}




      </section>
   )
}

export default MovieDetailPage