import { useState } from "react";


function NewReviewPage() {

   const initialFormData = {
      name: '',
      vote: '',
      text: ''
   }

   const [formData, setFormData] = useState(initialFormData);

   const setInputValue = (e) => {
      const { name, value } = e.target;
      setFormData((prev => ({
         ...prev,
         [name]: value
      })))
      console.log(formData)
   }

   const handlerSubmit = (e) => {
      e.preventDefault();
      console.log('Recensione inviata')
   }

   return (
      <section className="container">
         <div className="new-review-container">
            <form action="" onSubmit={handlerSubmit}>
               <label htmlFor="name">Nome</label>
               <input type="text" name="name" placeholder="Nome..." value={formData.name} onChange={setInputValue} />
               <label htmlFor="text">Testo</label>
               <input type="text" name="text" placeholder="Testo..." value={formData.text} onChange={setInputValue} />
               <label htmlFor="vote">Voto (Da 1 a 5)</label>
               <input type="number" name="vote" placeholder="Voto..." max={5} min={1} value={formData.vote} onChange={setInputValue} />
               <button className="btn" type="submit">Aggiungi</button>
            </form>
         </div>
      </section>
   )
}

export default NewReviewPage