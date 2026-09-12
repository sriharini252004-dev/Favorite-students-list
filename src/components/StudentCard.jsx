import { useStudents } from "../context/StudentContext";

function StudentCard({ student }) {
  const { favorites, addFavorite, removeFavorite } = useStudents();
  const isFavorite = favorites.some((fav) => fav.id === student.id);

  return (
    <div className="student-card">
      <img src={student.image} alt={student.name} className="student-image" />
      <h3>{student.name}</h3>
      <p>Roll No: {student.roll}</p>

      {isFavorite ? (
        <button className="remove-btn" onClick={() => removeFavorite(student.id)}>
          🗑 Remove
        </button>
      ) : (
        <button className="favorite-btn" onClick={() => addFavorite(student)}>
          ♥ Add to Favourite
        </button>
      )}
    </div>
  );
}

export default StudentCard;
