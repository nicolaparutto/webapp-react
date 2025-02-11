import { useState } from "react";
import axios from "axios";

function NewReviewForm(props) {

   const movieId = props.movie_id;
   const reloadPage = props.reloadPage

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

   //Validazione dei dati del form:
   const [errorMessage, setErrorMessage] = useState('');
   const validateData = () => {
      if (!formData.name || !formData.text || !formData.vote) {
         return false
      }
      if (isNaN(formData.vote) || formData.vote < 1 || formData.vote > 5) {
         return false
      }

      return true
   }

   const defaultApiUrl = 'http://localhost:3000/api/movies';
   const handlerSubmit = (e) => {
      e.preventDefault();

      //Validazione prima dell'invio
      if (!validateData()) {
         setErrorMessage(`Attenzione! compilare tutti i campi richiesti. Nome e testo sono obbligatori, e il numero deve essere compreso tra 1 e 5.`)
         return
      }

      axios.post(`${defaultApiUrl}/${movieId}/reviews`, formData, { headers: { 'Content-Type': 'application/json' } })
         .then(res => {
            setFormData(initialFormData);
            reloadPage(movieId);
            setErrorMessage('');
         })
   }

   return (
      <form action="" onSubmit={handlerSubmit}>
         <label htmlFor="name">Nome</label>
         <input type="text" name="name" placeholder="Nome..." value={formData.name} onChange={setInputValue} />
         <label htmlFor="text">Testo</label>
         <input type="text" name="text" placeholder="Testo..." value={formData.text} onChange={setInputValue} />
         <label htmlFor="vote">Voto (Da 1 a 5)</label>
         <input type="number" name="vote" placeholder="Voto..." max={5} min={1} value={formData.vote} onChange={setInputValue} />
         <p className="err-message">{errorMessage}</p>
         <button className="btn" type="submit">Aggiungi</button>
      </form>
   )
}

export default NewReviewForm