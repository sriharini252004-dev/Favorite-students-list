import StudentCard from "../components/StudentCard";
import { useStudents } from "../context/StudentContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites } = useStudents();

  return (
    <main className="page">
      <div className="page-heading">
        <div className="heading-icon heart">♥</div>
        <div>
          <h2>Favourite Students</h2>
          <p>Your favourite students will appear here.</p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-box">
          <div className="big-heart">♥</div>
          <h2>No favourite students added yet</h2>
          <p>Go to Student List and click “Add to Favourite”</p>
          <Link to="/" className="go-btn">
            ← Go to Student List
          </Link>
        </div>
      ) : (
        <div className="student-grid">
          {favorites.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Favorites;
