function AddMoviePage() {
   return (
      <section className="container">
         <div className="new-movie-form">
            <form action="">

               <label htmlFor="title">Titolo</label>
               <input type="text" name="title" placeholder="Titolo..." />

               <label htmlFor="director">Regista cinematografico</label>
               <input type="text" name="director" placeholder="Regista..." />

               <label htmlFor="genre">Genere</label>
               <input type="text" name="genre" placeholder="Genere..." />

               <label htmlFor="year">Anno di rilascio</label>
               <input type="number" name="relase_year" placeholder="Anno..." />

               <label htmlFor="description">Descrizione</label>
               <textarea type="text" name="abstract" placeholder="Descrizione..." />

               <label htmlFor="image">Immagine</label>
               <input type="file" name="image" />

               <button className="btn" type="submit">Aggiungi</button>
            </form>
         </div>
      </section>
   )
}

export default AddMoviePage