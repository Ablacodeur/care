const statistics = [
  { label: "Résidents actifs", value: "124" },
  { label: "Chambres disponibles", value: "8" },
  { label: "Demandes en attente", value: "6" },
  { label: "Factures impayées", value: "12" },
];

function DashboardPage() {
  return (
    <main>
      <header>
        <p>Vendredi 3 juillet 2026</p>
        <h1>Bonjour Victoire</h1>
        <p>Voici un aperçu de votre résidence.</p>
      </header>

      <section>
        {statistics.map((statistic) => (
          <article key={statistic.label}>
            <p>{statistic.label}</p>
            <strong>{statistic.value}</strong>
          </article>
        ))}
      </section>

      <section>
        <h2>Demandes récentes</h2>

        <article>
          <h3>Ajout d’un service d’entretien</h3>
          <p>Résidente : Marie Tremblay</p>
          <p>Demandé par : Sophie Tremblay</p>
          <p>Statut : En attente</p>
        </article>
      </section>
    </main>
  );
}

export default DashboardPage;