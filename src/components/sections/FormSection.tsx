import { useState } from 'react';

export default function FormSection() {
  const [checkbox, setCheckbox] = useState(true);
  const [radio, setRadio] = useState('option-1');
  const [select, setSelect] = useState('de');
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState('');
  const [textarea, setTextarea] = useState('');
  const [range, setRange] = useState(50);
  const [color, setColor] = useState('#3b82f6');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="section">
      <h2>Formulare</h2>
      <p className="section-intro">
        Beispiele für Inputs, Buttons, Checkboxen, Radios, Selects und mehr.
      </p>

      <form onSubmit={handleSubmit} className="form-demo">
        {/* Text Inputs */}
        <div className="example">
          <h3>Text-Eingaben</h3>
          <div className="form-row">
            <label className="form-field">
              <span>Name</span>
              <input
                type="text"
                placeholder="Dein Name"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </label>
            <label className="form-field">
              <span>E-Mail</span>
              <input type="email" placeholder="dein@email.de" />
            </label>
          </div>
          <div className="form-row">
            <label className="form-field">
              <span>Passwort</span>
              <input type="password" placeholder="••••••••" />
            </label>
            <label className="form-field">
              <span>Telefon</span>
              <input type="tel" placeholder="+49 123 456789" />
            </label>
          </div>
          <label className="form-field">
            <span>URL</span>
            <input type="url" placeholder="https://example.com" />
          </label>
          <label className="form-field">
            <span>Suche</span>
            <input type="search" placeholder="🔍 Suchen…" />
          </label>
        </div>

        {/* Disabled & Readonly */}
        <div className="example">
          <h3>Zustände</h3>
          <div className="form-row">
            <label className="form-field">
              <span>Normal</span>
              <input type="text" placeholder="Bearbeitbar" />
            </label>
            <label className="form-field">
              <span>Disabled</span>
              <input type="text" placeholder="Nicht verfügbar" disabled />
            </label>
            <label className="form-field">
              <span>Readonly</span>
              <input type="text" value="Nur lesbar" readOnly />
            </label>
          </div>
        </div>

        {/* Textarea */}
        <div className="example">
          <h3>Textarea</h3>
          <label className="form-field">
            <span>Nachricht</span>
            <textarea
              rows={4}
              placeholder="Schreibe deine Nachricht hier…"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            />
          </label>
        </div>

        {/* Select */}
        <div className="example">
          <h3>Auswahl (Select)</h3>
          <div className="form-row">
            <label className="form-field">
              <span>Sprache</span>
              <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
              </select>
            </label>
            <label className="form-field">
              <span>Mehrfachauswahl</span>
              <select multiple size={4}>
                <option>HTML</option>
                <option>CSS</option>
                <option>JavaScript</option>
                <option>TypeScript</option>
                <option>React</option>
                <option>Node.js</option>
              </select>
            </label>
          </div>
        </div>

        {/* Checkboxes */}
        <div className="example">
          <h3>Checkboxen</h3>
          <div className="checkbox-group">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={checkbox}
                onChange={(e) => setCheckbox(e.target.checked)}
              />
              <span>Newsletter abonnieren</span>
            </label>
            <label className="checkbox">
              <input type="checkbox" defaultChecked />
              <span>AGB akzeptiert</span>
            </label>
            <label className="checkbox">
              <input type="checkbox" />
              <span>Datenschutzerklärung gelesen</span>
            </label>
            <label className="checkbox">
              <input type="checkbox" disabled />
              <span>Deaktivierte Option</span>
            </label>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="example">
          <h3>Radio Buttons</h3>
          <div className="radio-group">
            {['option-1', 'option-2', 'option-3'].map((opt) => (
              <label key={opt} className="radio">
                <input
                  type="radio"
                  name="example-radio"
                  value={opt}
                  checked={radio === opt}
                  onChange={(e) => setRadio(e.target.value)}
                />
                <span>Option {opt.replace('option-', '')}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Toggle / Switch */}
        <div className="example">
          <h3>Toggle / Switch</h3>
          <label className="toggle">
            <input
              type="checkbox"
              checked={toggle}
              onChange={(e) => setToggle(e.target.checked)}
            />
            <span className="toggle-slider"></span>
            <span className="toggle-label">
              {toggle ? 'Aktiviert' : 'Deaktiviert'}
            </span>
          </label>
        </div>

        {/* Range */}
        <div className="example">
          <h3>Range / Slider</h3>
          <label className="form-field">
            <span>Lautstärke: {range}%</span>
            <input
              type="range"
              min={0}
              max={100}
              value={range}
              onChange={(e) => setRange(Number(e.target.value))}
              className="range"
            />
          </label>
        </div>

        {/* Color, Date, Time */}
        <div className="example">
          <h3>Spezielle Eingaben</h3>
          <div className="form-row">
            <label className="form-field">
              <span>Farbe</span>
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="color-input"
              />
              <code>{color}</code>
            </label>
            <label className="form-field">
              <span>Datum</span>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label className="form-field">
              <span>Uhrzeit</span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <label className="form-field">
              <span>Monat</span>
              <input type="month" />
            </label>
            <label className="form-field">
              <span>Woche</span>
              <input type="week" />
            </label>
            <label className="form-field">
              <span>Zahl</span>
              <input type="number" min={0} max={100} defaultValue={42} />
            </label>
          </div>
        </div>

        {/* File */}
        <div className="example">
          <h3>Datei-Upload</h3>
          <label className="file-input">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <span className="file-button">📁 Datei wählen</span>
            <span className="file-name">
              {file ? file.name : 'Keine Datei ausgewählt'}
            </span>
          </label>
        </div>

        {/* Fieldset */}
        <div className="example">
          <h3>Feldgruppen (Fieldset)</h3>
          <fieldset className="form-fieldset">
            <legend>Persönliche Daten</legend>
            <div className="form-row">
              <label className="form-field">
                <span>Vorname</span>
                <input type="text" placeholder="Max" />
              </label>
              <label className="form-field">
                <span>Nachname</span>
                <input type="text" placeholder="Mustermann" />
              </label>
            </div>
            <label className="form-field">
              <span>Geburtsdatum</span>
              <input type="date" />
            </label>
          </fieldset>
        </div>

        {/* Submit */}
        <div className="example">
          <h3>Formular absenden</h3>
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Absenden
            </button>
            <button type="reset" className="btn btn-secondary">
              Zurücksetzen
            </button>
            <button type="button" className="btn btn-tertiary">
              Abbrechen
            </button>
          </div>
          {submitted && (
            <div className="form-success">✅ Formular wurde gesendet!</div>
          )}
        </div>
      </form>
    </div>
  );
}