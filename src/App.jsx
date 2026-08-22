import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import LoveStory from "./pages/LoveStory";
import Memories from "./pages/Memories";
import Surprise from "./pages/Surprise";
import FinalSurprise from "./pages/FinalSurprise";

import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";

import PageTransition from "./components/PageTransition";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/story"
          element={
            <PageTransition>
              <LoveStory />
            </PageTransition>
          }
        />

        <Route
          path="/memories"
          element={
            <PageTransition>
              <Memories />
            </PageTransition>
          }
        />

        <Route
          path="/surprise"
          element={
            <PageTransition>
              <Surprise />
            </PageTransition>
          }
        />

        <Route
          path="/final-surprise"
          element={
            <PageTransition>
              <FinalSurprise />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>

      <FloatingHearts />

      <MusicPlayer />

      <AnimatedRoutes />

    </BrowserRouter>
  );
}