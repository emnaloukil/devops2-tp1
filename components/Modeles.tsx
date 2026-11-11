const modeles = [
  {
    title: "Évaluation des connaissances",
    text: "Vérifiez les acquis après une formation ou un cours.",
  },
  {
    title: "Sondage de satisfaction",
    text: "Recueillez les avis et les retours de vos participants.",
  },
  {
    title: "Quiz de révision",
    text: "Aidez votre groupe à réviser les notions essentielles.",
  },
];

export default function Modeles() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <h2>Modèles de questionnaires</h2>
          <p>Inspirez-vous de ces exemples pour créer votre questionnaire.</p>
        </div>
        <div className="cards">
          {modeles.map((modele, index) => (
            <div className="card" key={modele.title}>
              <div className="num">{String(index + 1).padStart(2, "0")}</div>
              <h3>{modele.title}</h3>
              <p>{modele.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
