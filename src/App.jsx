import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StudentList from "./pages/StudentList";
import Favorites from "./pages/Favorites";
import { StudentProvider } from "./context/StudentContext";
import "./App.css";

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
