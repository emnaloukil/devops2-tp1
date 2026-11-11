export default function CreateQuestionnaire() {
  return (
    <main>
      <nav className="nav">
        <div className="container">
          <a className="brand" href="/">
            <span className="brand-mark">Q</span>
            Quizzo
          </a>
        </div>
      </nav>

      <section>
        <div className="container" style={{ maxWidth: "760px" }}>
          <a href="/" style={{ display: "inline-block", marginBottom: "28px" }}>
            Retour à l&apos;accueil
          </a>

          <div className="section-head">
            <h1 style={{ fontSize: "clamp(32px, 5vw, 44px)" }}>
              Nouveau questionnaire
            </h1>
          </div>

          <form
            aria-label="Nouveau questionnaire"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: "clamp(20px, 5vw, 36px)",
              display: "grid",
              gap: "24px",
            }}
          >
            <div style={{ display: "grid", gap: "8px" }}>
              <label htmlFor="title" style={{ fontWeight: 600 }}>
                Titre
              </label>
              <input
                id="title"
                name="title"
                type="text"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  font: "inherit",
                }}
              />
            </div>

            <div style={{ display: "grid", gap: "8px" }}>
              <label htmlFor="description" style={{ fontWeight: 600 }}>
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  font: "inherit",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              className="btn btn-primary"
              type="button"
              disabled
              style={{ justifySelf: "start", cursor: "not-allowed", opacity: 0.6 }}
            >
              Enregistrer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
