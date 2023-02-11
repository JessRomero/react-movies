import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from "../../components/NavBar/NavBar";
import SignUpPage from '../SignUpPage/SignUpPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import ActorsListPage from '../ActorsListPage/ActorsListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import { movies } from "../../data.js";


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MoviesListPage movies={movies} />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorsListPage movies={movies} />} />
          </Routes>
        </>
      ) : (
        <SignUpPage setUser={setUser} />
      )}
    </div>
  );
}