import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Navigation from "./components/Navigation/Navigation";

import css from "./App.module.css";

const StaledLink = styled.div`
  .active {
    background-color: rgb(235, 71, 71);
  }
`;
function App() {
  return (
    <div className={css.app}>
      <header className={css.header}>
        <nav className={css.nav}>
          <StaledLink>
            <Navigation first="/" second="/movies" />
          </StaledLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
