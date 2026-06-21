export default function LayoutSection() {
  return (
    <div className="section">
      <h2>Layout</h2>
      <p className="section-intro">
        Beispiele für Grids, Flexbox, Cards und Container.
      </p>

      {/* Grid */}
      <div className="example">
        <h3>Grid (12 Spalten, responsiv)</h3>
        <div className="demo-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="grid-cell">{i + 1}</div>
          ))}
        </div>
        <p className="example-note">
          <code>display: grid; grid-template-columns: repeat(12, 1fr);</code>
        </p>
      </div>

      {/* Flexbox */}
      <div className="example">
        <h3>Flexbox — justify & align</h3>
        <div className="demo-flex-row">
          <div className="flex-box">1</div>
          <div className="flex-box">2</div>
          <div className="flex-box">3</div>
        </div>
        <div className="demo-flex-row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="flex-box">a</div>
          <div className="flex-box">b</div>
          <div className="flex-box">c</div>
        </div>
        <div className="demo-flex-column">
          <div className="flex-box">oben</div>
          <div className="flex-box">mitte</div>
          <div className="flex-box">unten</div>
        </div>
        <p className="example-note">
          Verschiedene <code>justify-content</code> und <code>flex-direction</code> Werte.
        </p>
      </div>

      {/* Cards */}
      <div className="example">
        <h3>Cards</h3>
        <div className="demo-cards">
          <article className="card">
            <div className="card-image" style={{ background: 'linear-gradient(135deg,#667eea,#764ba2)' }} />
            <div className="card-body">
              <h4>Card Titel</h4>
              <p>Eine kurze Beschreibung der Card. Klickbar, mit Bild und Aktionen.</p>
              <button className="btn btn-primary" type="button">Mehr erfahren</button>
            </div>
          </article>
          <article className="card">
            <div className="card-image" style={{ background: 'linear-gradient(135deg,#f093fb,#f5576c)' }} />
            <div className="card-body">
              <h4>Noch eine Card</h4>
              <p>Inhalt mit Bild-Header, Titel und Beschreibungstext.</p>
              <button className="btn btn-outline" type="button">Aktion</button>
            </div>
          </article>
          <article className="card">
            <div className="card-image" style={{ background: 'linear-gradient(135deg,#4facfe,#00f2fe)' }} />
            <div className="card-body">
              <h4>Dritte Card</h4>
              <p>Cards passen sich flexibel an die Containerbreite an.</p>
              <button className="btn btn-secondary" type="button">Details</button>
            </div>
          </article>
        </div>
      </div>

      {/* Container */}
      <div className="example">
        <h3>Container (Breiten)</h3>
        <div className="container-demo">
          <div className="container container-sm">
            <code>.container-sm</code> — schmal
          </div>
          <div className="container container-md">
            <code>.container-md</code> — mittel
          </div>
          <div className="container container-lg">
            <code>.container-lg</code> — breit
          </div>
          <div className="container container-fluid">
            <code>.container-fluid</code> — 100% Breite
          </div>
        </div>
      </div>
    </div>
  );
}
