import React, { useState } from 'react'
import './Grade.css'

const GradeCard = () => {
  const [marks, setMarks] = useState("");

  let grade;
  if (marks === "") grade = <p className="grade-result grade-empty">Enter your marks 📝</p>;
  else if (marks >= 90) grade = <p className="grade-result grade-a">A Grade — Outstanding! 🏆</p>;
  else if (marks >= 75) grade = <p className="grade-result grade-b">B Grade — Great job! 👍</p>;
  else if (marks >= 50) grade = <p className="grade-result grade-c">C Grade — Keep pushing! 💪</p>;
  else grade = <p className="grade-result grade-f">Failed — Try again! 📚</p>;

  return (
    <div className="grade-container">
      <h2 className="grade-title">Grade Calculator 🎓</h2>
      <input 
        className="grade-input"
        type="number" 
        placeholder="Enter marks (0-100)"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      {grade}
    </div>
  )
}

export default GradeCard