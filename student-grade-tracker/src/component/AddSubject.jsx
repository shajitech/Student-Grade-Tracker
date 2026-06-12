import { useState } from "react";
import "./App.css";


function AddSubject({ subjects, setSubjects }) {
    const [input, setInput] = useState({
        name: "",
        score: ""
    });
    const [error, setError] = useState("");

    const getgradeGrade = (score) => {
        if (score >= 90) return { grade: "A", color: "#2563eb" };
        if (score >= 80) return { grade: "B", color: "#2563eb" };
        if (score >= 70) return { grade: "C", color: "#d97706" };
        if (score >= 60) return { grade: "D", color: "#ea580c" };
        return { grade: "F", color: "#dc2626" };
    };

    const handleAdd = () => {
        const score = parseInt(input.score, 10);
        const name = input.name;

        if (!input.name.trim()) {
            setError("Enter a subject name.");
            return;
        }
        if (isNaN(score) || score < 0 || score > 100) {
            setError("Score must be 0–100.");
            return;
        }

        setSubjects([...subjects, { id: Date.now(), name: name.trim(), score: score, ...getgradeGrade(score) }]);
        setInput({ name: "", score: "" });
        setError("");
    };
    return (
        <>
            {/* Add Subject Form */}
            <div className="card">
                <div className="card-title">Add Subject</div>
                <div className="form-row">
                    <input
                        type="text"
                        className="input name-input"
                        placeholder="Subject name"
                        value={input.name}
                        onChange={(e) => { setInput({ ...input, name: e.target.value }); setError(""); }}
                    />
                    <input
                        className="input score-input"
                        placeholder="Score (0–100)"
                        type="number"
                        min="0"
                        max="100"
                        value={input.score}
                        onChange={(e) => { setInput({ ...input, score: e.target.value }); setError(""); }}
                    />
                    <button className="btn-add" onClick={handleAdd}>Add</button>
                </div>
                {error && <p className="error-msg">{error}</p>}
            </div>
        </>
    );
}

export default AddSubject;