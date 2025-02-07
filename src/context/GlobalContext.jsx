import axios from "axios";
import { useState, useContext, createContext } from "react";

const GlobalDataContext = createContext();

const GlobalProvider = ({ children }) => {

   const defaultApiUrl = 'http://localhost:3000';

   const [movieData, setMovieData] = useState([]);

   const fetchMovies = () => {
      axios.get(`${defaultApiUrl}/api/movies`)
         .then(res => {
            setMovieData(res.data)
         })
   }

   return (
      <GlobalDataContext.Provider value={{ fetchMovies, movieData }}>
         {children}
      </GlobalDataContext.Provider>
   )
}

const useGlobalDataContext = () => {
   return useContext(GlobalDataContext)
}

export { useGlobalDataContext, GlobalProvider }