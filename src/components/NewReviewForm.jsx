import { useState } from "react";
import axios from "axios";

function NewReviewForm() {

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

   }

   const defaultApiUrl = 'http://localhost:3000/api/movies';
   const handlerSubmit = (e) => {
      e.preventDefault();

   }

   return (
      <form action="" onSubmit={handlerSubmit}>
         <label htmlFor="name">Nome</label>
         <input type="text" name="name" placeholder="Nome..." value={formData.name} onChange={setInputValue} />
         <label htmlFor="text">Testo</label>
         <input type="text" name="text" placeholder="Testo..." value={formData.text} onChange={setInputValue} />
         <label htmlFor="vote">Voto (Da 1 a 5)</label>
         <input type="number" name="vote" placeholder="Voto..." max={5} min={1} value={formData.vote} onChange={setInputValue} />
         <button className="btn" type="submit">Aggiungi</button>
      </form>
   )
}

export default NewReviewForm