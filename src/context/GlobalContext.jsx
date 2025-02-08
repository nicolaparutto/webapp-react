import axios from "axios";
import { useState, useContext, createContext } from "react";

const GlobalDataContext = createContext();

const GlobalProvider = ({ children }) => {

   const defaultApiUrl = 'http://localhost:3000';

   const [moviesData, setMoviesData] = useState([]);
   const [movieData, setMovieData] = useState([]);

   const fetchMovies = () => {
      axios.get(`${defaultApiUrl}/api/movies`)
         .then(res => {
            setMoviesData(res.data)
         })
   }

   const fetchMovie = (id) => {
      axios.get(`${defaultApiUrl}/api/movies/${id}`)
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