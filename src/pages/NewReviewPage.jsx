function NewReviewPage() {
   return (
      <section className="container">
         <div className="new-review-container">
            <form action="">
               <label htmlFor="">Nome</label>
               <input type="text" name="name" placeholder="Nome..." id="" />
               <label htmlFor="">Testo</label>
               <input type="text" name="text" placeholder="Testo..." id="" />
               <label htmlFor="">Voto (Da 1 a 5)</label>
               <input type="number" name="vote" placeholder="Voto..." id="" max={5} min={1} />
               <button className="btn" type="submit">Aggiungi</button>
            </form>
         </div>
      </section>
   )
}

export default NewReviewPage