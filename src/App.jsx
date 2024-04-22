import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

import Loader from "./components/Loader/Loader";
import Navigation from "./components/Navigation/Navigation";

import styled from "styled-components";
import css from "./App.module.css";
import "./App.css";

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
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
