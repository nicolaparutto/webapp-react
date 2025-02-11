import { useState } from "react";

function AddMoviePage() {

   const initialMovieData = {
      title: '',
      director: '',
      genre: '',
      relase_year: '',
      abstract: '',
      image: null
   }

   const [newMovieData, setNewMovieData] = useState(initialMovieData);
   const changeInputValue = (e) => {
      const { name, value } = e.target;
      setNewMovieData(prev => ({
         ...prev,
         [name]: value
      }))
      console.log(newMovieData)
   }

   const handlerSubmit = (e) => {
      e.preventDefault();
      console.log('film inviato')
   }

   return (
      <section className="container">
         <div className="new-movie-form">
            <form action="" onSubmit={handlerSubmit}>

               <label htmlFor="title">Titolo</label>
               <input type="text" name="title" placeholder="Titolo..." value={newMovieData.title} onChange={changeInputValue} />

               <label htmlFor="director">Regista cinematografico</label>
               <input type="text" name="director" placeholder="Regista..." value={newMovieData.director} onChange={changeInputValue} />

               <label htmlFor="genre">Genere</label>
               <input type="text" name="genre" placeholder="Genere..." value={newMovieData.genre} onChange={changeInputValue} />

               <label htmlFor="year">Anno di rilascio</label>
               <input type="number" name="relase_year" placeholder="Anno..." value={newMovieData.relase_year} onChange={changeInputValue} />

               <label htmlFor="description">Descrizione</label>
               <textarea type="text" name="abstract" placeholder="Descrizione..." value={newMovieData.abstract} onChange={changeInputValue} />

               <label htmlFor="image">Immagine</label>
               <input type="file" name="image" onChange={changeInputValue} />

               <button className="btn" type="submit">Aggiungi</button>
            </form>
         </div>
      </section>
   )
}

export default AddMoviePage