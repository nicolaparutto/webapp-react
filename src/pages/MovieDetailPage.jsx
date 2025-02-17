import { useGlobalDataContext } from "../context/globalContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import StarsRating from "../components/StarsRating";
import NewReviewForm from "../components/NewReviewForm";
import axios from "axios";

function MovieDetailPage() {

   const { id } = useParams();

   const { movieData, fetchMovie, } = useGlobalDataContext();

   const navigate = useNavigate();
   const defaultApiUrl = 'http://localhost:3000/api/movies';
   const deleteMovieData = (id) => {
      axios.delete(`${defaultApiUrl}/${id}`)
         .then(res => {
            navigate('/home')
         })
   }

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
                  <div className="delete-btn-container">
                     <button className="btn-red" onClick={() => {
                        if (confirm('Elliminare definitivamente il film?'))
                           deleteMovieData(movie.id)
                     }}
                     >Ellimina</button>
                  </div>
               </div>

               <Link to='/home' className="btn d-block text-center">Torna alla Lista</Link>

               <div className="movie-reviews">
                  <h3>Recensioni</h3>
                  {movie.reviews.map(review => (
                     <div key={review.id} className="review-container">
                        <p>Scritto da: {review.name}</p>
                        <StarsRating vote={review.vote} />
                        <p>{review.text}</p>
                     </div>
                  ))}
               </div>

               <div className="new-review-container">
                  <h1>Aggiungi una recensione</h1>
                  <NewReviewForm movie_id={movie.id} reloadPage={fetchMovie} />
               </div>
            </div>
         ))
         }
      </section >
   )
}

export default MovieDetailPage