import { Link, useLocation } from "react-router-dom";
import { useStudents } from "../context/StudentContext";

function Header() {
  const { favorites } = useStudents();
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo-section">
        <div className="cap-icon">🎓</div>
        <h1>Favourite Student List</h1>
      </div>

      <nav>
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Student List
        </Link>
        <Link to="/favorites" className={location.pathname === "/favorites" ? "active-link" : ""}>
          Favourite Students
          <span className="count">{favorites.length}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
