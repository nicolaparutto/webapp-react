//router import:
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Default Layout import:
import DefaultLayout from "./layouts/DefaultLayout";
//pages:
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import AddMoviePage from "./pages/AddMoviePage";
//global provider import:
import { GlobalProvider } from "./context/globalContext";

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/home" Component={HomePage} />
            <Route path="/movie-detail/:id" Component={MovieDetailPage} />
            <Route path="/add-movie" Component={AddMoviePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )

}

export default App
