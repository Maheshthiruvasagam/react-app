import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Carousel from "./index.jsx";
import MovieDetails from "./MovieDetails";
import FeatureCards from "./FeatureCards";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Auth from "./Auth";

function App() {
  return (
    <Router basename="/react-app"> {/* Set base path if deployed to /react-app */}
      <Routes>
        {/* Main layout with header */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <FeatureCards />
                <FAQ />
                <Footer />
              </>
            }
          />
        </Route>

        {/* Auth Page (no header) */}
        <Route path="/auth" element={<Auth />} />

        {/* Movie Details Page (no header) */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* 404 fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
