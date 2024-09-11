import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import AdminPage from "./pages/Admin";
import TeacherPage from "./pages/Teacher";
import StudentPage from "./pages/Student";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ProtectedRoute from "./services/ProtectedRoute";
function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute
              isAuthenticated={true}
              role="Administrator"
              requiredRole="Administrator"
            >
              <AdminPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute
              isAuthenticated={true}
              role="Teacher"
              requiredRole="Teacher"
            >
              <TeacherPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/*"
          element={
            <ProtectedRoute
              isAuthenticated={true}
              role="Student"
              requiredRole="Student"
            >
              <StudentPage />
            </ProtectedRoute>
          }
        />

        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    // </Router>
  );
}

export default App;
