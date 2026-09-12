import StudentCard from "../components/StudentCard";
import { useStudents } from "../context/StudentContext";

function StudentList() {
  const { students } = useStudents();

  return (
    <main className="page">
      <div className="page-heading">
        <div className="heading-icon">👥</div>
        <div>
          <h2>Student List</h2>
          <p>Click on “Add to Favourite” to save your favourite students.</p>
        </div>
      </div>

      <div className="student-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </main>
  );
}

export default StudentList;
