export default function TypographySection() {
  return (
    <div className="section">
      <h2>Typografie</h2>
      <p className="section-intro">
        Beispiele für Überschriften, Texte, Schriftarten, Listen, Zitate.
      </p>

      {/* Überschriften */}
      <div className="example">
        <h3>Überschriften (h1 – h6)</h3>
        <h1>Heading 1 — Die größte Überschrift</h1>
        <h2>Heading 2 — Wichtige Sektion</h2>
        <h3>Heading 3 — Untergeordnete Sektion</h3>
        <h4>Heading 4 — Detail-Überschrift</h4>
        <h5>Heading 5 — Kleinere Überschrift</h5>
        <h6>Heading 6 — Kleinste Überschrift</h6>
      </div>

      {/* Fließtext */}
      <div className="example">
        <h3>Fließtext & Absätze</h3>
        <p>
          Dies ist ein normaler Absatz mit <strong>fettem Text</strong>,{' '}
          <em>kursivem Text</em>, <u>unterstrichenem Text</u> und{' '}
          <mark>markiertem Text</mark>. Du kannst auch{' '}
          <small>kleinen Text</small> für Hinweise verwenden.
        </p>
        <p>
          Ein <a href="#" onClick={(e) => e.preventDefault()}>Link</a> führt
          dich zu einer anderen Seite. Zeilenumbrüche
          <br />
          sind ebenfalls möglich.
        </p>
        <p>
          <code>const example = "Inline-Code";</code> wird für technische
          Begriffe verwendet.
        </p>
      </div>

      {/* Schriftgrößen */}
      <div className="example">
        <h3>Schriftgrößen & -stile</h3>
        <p className="text-xs">Extra small (12px) — Fußnoten, Beschriftungen</p>
        <p className="text-sm">Small (14px) — Sekundärtext, Hinweise</p>
        <p className="text-base">Base (16px) — Standard-Fließtext</p>
        <p className="text-lg">Large (18px) — Hervorgehobener Text</p>
        <p className="text-xl">Extra Large (20px) — Lead-Text</p>
        <p className="text-2xl">2XL (24px) — Sub-Headlines</p>
      </div>

      {/* Schriftarten */}
      <div className="example">
        <h3>Schriftarten</h3>
        <p className="font-sans">
          Sans-Serif: Die schnelle Foxhound springt über den trägen Hund.
        </p>
        <p className="font-serif">
          Serif: Die schnelle Foxhound springt über den trägen Hund.
        </p>
        <p className="font-mono">
          Monospace: const fox = "springt über den Hund";
        </p>
        <p className="font-cursive">
          Cursive: Die schnelle Foxhound springt über den trägen Hund.
        </p>
      </div>

      {/* Listen */}
      <div className="example">
        <h3>Listen</h3>
        <h4>Ungeordnete Liste</h4>
        <ul>
          <li>Erster Punkt</li>
          <li>Zweiter Punkt
            <ul>
              <li>Verschachtelter Punkt A</li>
              <li>Verschachtelter Punkt B</li>
            </ul>
          </li>
          <li>Dritter Punkt</li>
        </ul>

        <h4>Geordnete Liste</h4>
        <ol>
          <li>Schritt eins</li>
          <li>Schritt zwei</li>
          <li>Schritt drei</li>
        </ol>

        <h4>Definitionsliste</h4>
        <dl>
          <dt>React</dt>
          <dd>Eine JavaScript-Bibliothek für Benutzeroberflächen</dd>
          <dt>TypeScript</dt>
          <dd>Eine typisierte Obermenge von JavaScript</dd>
        </dl>
      </div>

      {/* Zitate */}
      <div className="example">
        <h3>Zitate</h3>
        <blockquote className="quote">
          „Die beste Art, die Zukunft vorherzusagen, ist, sie zu gestalten."
          <cite>— Alan Kay</cite>
        </blockquote>
        <blockquote className="quote quote-alt">
          „Einfachheit ist die höchste Stufe der Vollendung."
          <cite>— Leonardo da Vinci</cite>
        </blockquote>
      </div>

      {/* Code-Blöcke */}
      <div className="example">
        <h3>Code-Blöcke</h3>
        <pre className="code-block">
          <code>{`function greet(name: string): string {
  return \`Hallo, \${name}!\`;
}

console.log(greet('Welt'));`}</code>
        </pre>
      </div>
    </div>
  );
}