import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  

    const [students] = useState([
  // Boys
  { id: 101, name: "Anamika Mehta", roll: "101", image: "https://i.pravatar.cc/90?img=32" },
  { id: 102, name: "Kajol ", roll: "102", image: "https://i.pravatar.cc/90?img=45" },
  { id: 103, name: "Avanthika Rao", roll: "103", image: "https://i.pravatar.cc/90?img=48" },
  { id: 104, name: "Roshika Verma", roll: "104", image: "https://i.pravatar.cc/90?img=49" },
  { id: 105, name: "wilspat", roll: "105", image: "https://i.pravatar.cc/90?img=51" },

  // Girls
  { id: 201, name: "Sneha Iyer", roll: "201", image: "https://i.pravatar.cc/90?img=47" },
  { id: 202, name: "Anand kumar", roll: "202", image: "https://i.pravatar.cc/90?img=52" },
  { id: 203, name: "Dilip nair", roll: "203", image: "https://i.pravatar.cc/90?img=53" },
  { id: 204, name: "Karan Singh", roll: "204", image: "https://i.pravatar.cc/90?img=54" },
  { id: 205, name: "Saran gowda", roll: "205", image: "https://i.pravatar.cc/90?img=55" },
  { id: 109, name: "Siddharth Reddy", roll: "109", image: "https://i.pravatar.cc/90?img=56" }, // Boy
  { id: 110, name: "Manoj Joshi", roll: "110", image: "https://i.pravatar.cc/90?img=57" },     // Girl
]);


  

  const [favorites, setFavorites] = useState([]);

  const addFavorite = (student) => {
    if (!favorites.find((fav) => fav.id === student.id)) {
      setFavorites([...favorites, student]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, favorites, addFavorite, removeFavorite }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = () => useContext(StudentContext);
