import axios from "axios";
import { useState, useContext, createContext } from "react";

const GlobalDataContext = createContext();

const GlobalProvider = ({ children }) => {

   const defaultApiUrl = 'http://localhost:3000/api/movies';

   const [moviesData, setMoviesData] = useState([]);
   const [movieData, setMovieData] = useState([]);

   const fetchMovies = () => {
      axios.get(defaultApiUrl)
         .then(res => {
            setMoviesData(res.data)
         })
   }

   const fetchMovie = (id) => {
      axios.get(`${defaultApiUrl}/${id}`)
         .then(res => {
            setMovieData(res.data)
         })
   }


   return (
      <GlobalDataContext.Provider value={{ fetchMovies, moviesData, fetchMovie, movieData }}>
         {children}
      </GlobalDataContext.Provider>
   )
}

const useGlobalDataContext = () => {
   return useContext(GlobalDataContext)
}

export { useGlobalDataContext, GlobalProvider }