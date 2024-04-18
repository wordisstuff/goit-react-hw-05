import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import css from "./App.module.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <div className={css.app}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navlink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navlink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
