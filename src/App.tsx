import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InstructorDashboard from "./pages/InstructorDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import Layout from "./components/Layout";
import PrivateRoute from "./guards/PrivateRoute";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas sin Layout */}

        {/* Rutas con Layout */}
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/instructor"
                  element={
                    <PrivateRoute roles={["Instructor"]}>
                      <InstructorDashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/student"
                  element={
                    <PrivateRoute roles={["Student"]}>
                      <StudentDashboard />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
