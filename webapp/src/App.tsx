import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"; // Ensure this path is correct
import Home from "./pages/Home"; // Ensure these paths are correct
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Todo from "./pages/ToDo"; // Ensure proper casing, case matters

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Define routes where the Navbar should not be shown
  const hideNavbarRoutes = ["/sign-in", "/sign-up", "/todo"]; // Ensure correct casing

  return (
    <>
      <div className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />{" "}
          {/* Ensure correct casing */}
        </Routes>
      </div>
    </>
  );
}

export default App;
