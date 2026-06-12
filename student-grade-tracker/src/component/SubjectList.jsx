import "./App.css"


function SubjectList({ subjects, setSubjects }) {

    const handleDelete = (id) => setSubjects(subjects.filter((s) => s.id !== id));

    return (
        <div className="card">
            <div className="card-title">Subjects</div>
            <div className="subject-list">
                {subjects.map((s) => {
                    const color = s.color;
                    const isPass = s.score >= 50;
                    return (
                        <div className="subject-row" key={s.id}>
                            <span className="subject-name">{s.name}</span>
                            <div className="subject-details">
                                <div className="bar-wrap">
                                    <div
                                        className="bar-fill"
                                        style={{ width: s.score + "%", background: s.color }}
                                    />
                                </div>
                                <span className="score-pct">{s.score}%</span>
                                <span className="grade-letter" style={{ color }}>{s.grade}</span>
                                <span
                                    className="pass-badge"
                                    style={{
                                        background: isPass ? "#dcfce7" : "#fee2e2",
                                        color: isPass ? "#15803d" : "#b91c1c",
                                        border: `1px solid ${isPass ? "#bbf7d0" : "#fecaca"}`,
                                    }}
                                >
                                    {isPass ? "Pass" : "Fail"}
                                </span>
                                <button className="btn-del" onClick={() => handleDelete(s.id)}>✕</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SubjectList;