import { useEffect, useState } from "react";
import "./component/App.css";
import Stats from "./component/Stats";
import SubjectList from "./component/SubjectList";
import AddSubject from "./component/AddSubject";



const initialSubjects = [
  {
    id: 1,
    name: "Mathematics",
    score: 88,
    grade: 'B',
    color: "#2563eb"
  },
  {
    id: 2,
    name: "Physics",
    score: 45,
    grade: 'F',
    color: "#dc2626"
  },
  {
    id: 3,
    name: "English",
    score: 72,
    grade: 'C',
    color: "#d97706"
  },
];

function App() {
  const [subjects, setSubjects] = useState(() => {
    const savedSubjects = localStorage.getItem("subjects");

    return savedSubjects
      ? JSON.parse(savedSubjects)
      : initialSubjects;
  });


  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects))
  }, [subjects])




  return (
    <div className="app">
      <h1>Grade Tracker</h1>

      <Stats subjects={subjects} />

      <AddSubject subjects={subjects} setSubjects={setSubjects} />

      <SubjectList subjects={subjects} setSubjects={setSubjects} />

    </div>
  );
}

export default App;