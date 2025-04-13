import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}
