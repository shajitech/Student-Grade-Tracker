import "./App.css"

function Stats({subjects }) {
    const avg = subjects.length
        ? Math.round(subjects.reduce((s, x) => s + x.score, 0) / subjects.length)
        : 0;
    const highest = subjects.length ? Math.max(...subjects.map((x) => x.score)) : 0;
    const passing = subjects.filter((x) => x.score >= 50).length;
    const failing = subjects.filter((x) => x.score < 50).length;
    return (
        <>
            <div className="stat-grid">
                <div className="stat-card" style={{ borderColor: "#6366f1",backgroundColor: "#e7e8f9" }}>
                    <div className="stat-val" style={{ color: "#6366f1" }}>{avg}%</div>
                    <div className="stat-label">AVERAGE</div>
                </div>
                <div className="stat-card" style={{ borderColor: "#16a34a",backgroundColor: "#e0ece4" }}>
                    <div className="stat-val" style={{ color: "#16a34a" }}>{highest}%</div>
                    <div className="stat-label">HIGHEST</div>
                </div>
                <div className="stat-card" style={{ borderColor: "#2563eb",backgroundColor: "#e6e9f0" }}>
                    <div className="stat-val" style={{ color: "#2563eb" }}>{passing}</div>
                    <div className="stat-label">PASSING</div>
                    <div className="stat-sub">of {subjects.length}</div>
                </div>
                <div className="stat-card" style={{ borderColor: "#dc2626", backgroundColor: "#f3efef" }}>
                    <div className="stat-val" style={{ color: "#dc2626" }}>{failing}</div>
                    <div className="stat-label">FAILING</div>
                    <div className="stat-sub">of {subjects.length}</div>
                </div>
            </div>
        </>
    )
}
export default Stats;