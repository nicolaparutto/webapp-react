import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMoviePage() {

   const initialMovieData = {
      title: '',
      director: '',
      genre: '',
      release_year: '',
      abstract: '',
      image: null
   }

   const [newMovieData, setNewMovieData] = useState(initialMovieData);
   const changeInputValue = (e) => {
      const { name, value } = e.target;

      if (name === 'image') {
         setNewMovieData(prev => ({
            ...prev,
            image: e.target.files[0]
         }))
      } else {
         setNewMovieData(prev => ({
            ...prev,
            [name]: value,
         }))
      }
   }

   const defaultApiUrl = 'http://localhost:3000/api/movies';
   const navigate = useNavigate();
   const handlerSubmit = (e) => {
      e.preventDefault();

      const dataToSend = new FormData();
      for (let key in newMovieData) {
         dataToSend.append(key, newMovieData[key]);
      }

      axios.post(defaultApiUrl, dataToSend, { headers: { 'Content-Type': 'multipart/form-data' } })
         .then(() => navigate('/home'))
   }

   return (
      <section className="container">
         <div className="new-movie-form">
            <form action="" onSubmit={handlerSubmit}>

               <label htmlFor="for-title">Titolo</label>
               <input type="text" name="title" placeholder="Titolo..." value={newMovieData.title} onChange={changeInputValue} />

               <label htmlFor="for-director">Regista cinematografico</label>
               <input type="text" name="director" placeholder="Regista..." value={newMovieData.director} onChange={changeInputValue} />

               <label htmlFor="genre">Genere</label>
               <input type="text" name="genre" placeholder="Genere..." value={newMovieData.genre} onChange={changeInputValue} />

               <label htmlFor="for-year">Anno di rilascio</label>
               <input type="number" name="release_year" placeholder="Anno..." value={newMovieData.release_year} onChange={changeInputValue} />

               <label htmlFor="for-description">Descrizione</label>
               <textarea type="text" name="abstract" placeholder="Descrizione..." value={newMovieData.abstract} onChange={changeInputValue} />

               <label htmlFor="for-image">Immagine</label>
               <input type="file" name="image" onChange={changeInputValue} />

               <button className="btn" type="submit">Aggiungi</button>
            </form>
         </div>
      </section>
   )
}

export default AddMoviePage