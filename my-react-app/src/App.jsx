import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Header from "./header";
import Carousel from "./index.jsx";
import MovieDetails from "./MovieDetails";
import FeatureCards from "./FeatureCards";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Auth from "./Auth";

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ Home route (uses MainLayout with Header) */}
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

        {/* ❌ Auth Page (NO Header) */}
        <Route path="/auth" element={<Auth />} />

        {/* ❌ Movie Details Page (NO Header) */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        
      </Routes>
    </Router>
  );
}

export default App;
