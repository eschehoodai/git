export default function ButtonBadgeSection() {
  return (
    <div className="section">
      <h2>Buttons & Badges</h2>
      <p className="section-intro">
        Beispiele für verschiedene Button-Stile, Badges und Tags.
      </p>

      {/* Primary Buttons */}
      <div className="example">
        <h3>Primary Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary btn-lg">Large</button>
          <button className="btn btn-primary btn-primary-hover">Hover Me</button>
        </div>
      </div>

      {/* Secondary Buttons */}
      <div className="example">
        <h3>Secondary Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-secondary btn-sm">Small</button>
          <button className="btn btn-secondary btn-lg">Large</button>
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="example">
        <h3>Outline Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-outline btn-sm">Small</button>
          <button className="btn btn-outline btn-lg">Large</button>
          <button className="btn btn-outline btn-outline-blue">Blue</button>
          <button className="btn btn-outline btn-outline-green">Green</button>
          <button className="btn btn-outline btn-outline-red">Red</button>
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="example">
        <h3>Ghost Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-ghost btn-sm">Small</button>
          <button className="btn btn-ghost btn-lg">Large</button>
        </div>
      </div>

      {/* Destructive Buttons */}
      <div className="example">
        <h3>Destructive Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-danger btn-sm">Small</button>
          <button className="btn btn-danger btn-lg">Large</button>
          <button className="btn btn-danger-outline">Danger Outline</button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="example">
        <h3>Icon Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-icon">🔍</button>
          <button className="btn btn-icon btn-icon-blue">📝</button>
          <button className="btn btn-icon btn-icon-green">✓</button>
          <button className="btn btn-icon btn-icon-red">✕</button>
          <button className="btn btn-icon btn-icon-lg">🗑️</button>
        </div>
      </div>

      {/* Buttons with Icons */}
      <div className="example">
        <h3>Buttons mit Icons</h3>
        <div className="button-showcase">
          <button className="btn btn-primary">
            <span>📥</span> Download
          </button>
          <button className="btn btn-secondary">
            <span>✏️</span> Bearbeiten
          </button>
          <button className="btn btn-danger">
            <span>🗑️</span> Löschen
          </button>
          <button className="btn btn-outline">
            <span>↗️</span> Externer Link
          </button>
        </div>
      </div>

      {/* Button Groups */}
      <div className="example">
        <h3>Button Groups</h3>
        <div className="button-group">
          <button className="btn btn-primary">Links</button>
          <button className="btn btn-primary">Mitte</button>
          <button className="btn btn-primary">Rechts</button>
        </div>
        <div className="button-group button-group-vertical">
          <button className="btn btn-secondary">Oben</button>
          <button className="btn btn-secondary">Mitte</button>
          <button className="btn btn-secondary">Unten</button>
        </div>
      </div>

      {/* Loading Buttons */}
      <div className="example">
        <h3>Loading Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-primary btn-loading">
            <span className="spinner"></span>
            Laden...
          </button>
          <button className="btn btn-secondary btn-loading">
            <span className="spinner spinner-sm"></span>
            Speichern...
          </button>
          <button className="btn btn-outline btn-loading">
            <span className="spinner"></span>
            Laden...
          </button>
        </div>
      </div>

      {/* Disabled Buttons */}
      <div className="example">
        <h3>Disabled Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-primary" disabled>
            Disabled Primary
          </button>
          <button className="btn btn-secondary" disabled>
            Disabled Secondary
          </button>
          <button className="btn btn-outline" disabled>
            Disabled Outline
          </button>
          <button className="btn btn-ghost" disabled>
            Disabled Ghost
          </button>
        </div>
      </div>

      {/* Full Width Block Button */}
      <div className="example">
        <h3>Block Buttons</h3>
        <button className="btn btn-primary btn-block">
          Block Button (volle Breite)
        </button>
        <button className="btn btn-secondary btn-block">
          Zweiter Block Button
        </button>
      </div>

      {/* Circular Buttons */}
      <div className="example">
        <h3>Circular Buttons</h3>
        <div className="button-showcase">
          <button className="btn btn-circle btn-circle-sm">+</button>
          <button className="btn btn-circle">1</button>
          <button className="btn btn-circle btn-circle-lg">A</button>
          <button className="btn btn-circle btn-circle-primary">★</button>
        </div>
      </div>

      {/* Badges */}
      <div className="example">
        <h3>Badges</h3>
        <div className="badge-showcase">
          <div>
            <span className="badge">Default</span>
            {' '}
            <span className="badge badge-primary">Primary</span>
            {' '}
            <span className="badge badge-secondary">Secondary</span>
            {' '}
            <span className="badge badge-success">Success</span>
            {' '}
            <span className="badge badge-warning">Warning</span>
            {' '}
            <span className="badge badge-danger">Danger</span>
            {' '}
            <span className="badge badge-info">Info</span>
          </div>
        </div>
      </div>

      {/* Badge Sizes */}
      <div className="example">
        <h3>Badge Größen</h3>
        <div className="badge-showcase">
          <div>
            <span className="badge badge-sm">Small</span>
            {' '}
            <span className="badge badge-primary badge-sm">Small</span>
            {' '}
            <span className="badge">Normal</span>
            {' '}
            <span className="badge badge-primary">Normal</span>
            {' '}
            <span className="badge badge-lg">Large</span>
            {' '}
            <span className="badge badge-primary badge-lg">Large</span>
          </div>
        </div>
      </div>

      {/* Rounded Badges */}
      <div className="example">
        <h3>Rounded Badges (Pills)</h3>
        <div className="badge-showcase">
          <div>
            <span className="badge badge-pill">Default</span>
            {' '}
            <span className="badge badge-pill badge-primary">Primary</span>
            {' '}
            <span className="badge badge-pill badge-success">Success</span>
            {' '}
            <span className="badge badge-pill badge-warning">Warning</span>
            {' '}
            <span className="badge badge-pill badge-danger">Danger</span>
          </div>
        </div>
      </div>

      {/* Badge with Icons */}
      <div className="example">
        <h3>Badges mit Icons</h3>
        <div className="badge-showcase">
          <div>
            <span className="badge badge-primary">🔔 Neu</span>
            {' '}
            <span className="badge badge-success">✓ Bereit</span>
            {' '}
            <span className="badge badge-warning">⚠️ Warnung</span>
            {' '}
            <span className="badge badge-danger">✗ Fehler</span>
            {' '}
            <span className="badge badge-info">ℹ️ Info</span>
          </div>
        </div>
      </div>

      {/* Badge Counters */}
      <div className="example">
        <h3>Badge Counters (Notifications)</h3>
        <div className="badge-showcase">
          <div>
            <button className="btn btn-primary">
              Nachrichten <span className="badge badge-count">5</span>
            </button>
            {' '}
            <button className="btn btn-secondary">
              Aufgaben <span className="badge badge-count badge-count-warn">12</span>
            </button>
            {' '}
            <button className="btn btn-outline">
              Updates <span className="badge badge-count badge-count-hot">99+</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="example">
        <h3>Tags (entfernbare Badges)</h3>
        <div className="tag-showcase">
          <span className="tag">React</span>
          <span className="tag">TypeScript</span>
          <span className="tag">Vite</span>
          <span className="tag">CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">HTML</span>
        </div>
      </div>

      {/* Tag Colors */}
      <div className="example">
        <h3>Tags mit Farben</h3>
        <div className="tag-showcase">
          <span className="tag tag-primary">Frontend</span>
          <span className="tag tag-success">Fertig</span>
          <span className="tag tag-warning">In Arbeit</span>
          <span className="tag tag-danger">Kritisch</span>
          <span className="tag tag-info">Info</span>
        </div>
      </div>

      {/* Interactive Tags */}
      <div className="example">
        <h3>Interaktive Tags</h3>
        <div className="tag-showcase">
          <button className="tag">
            React <span className="tag-remove">×</span>
          </button>
          <button className="tag tag-primary">
            TypeScript <span className="tag-remove">×</span>
          </button>
          <button className="tag tag-success">
            Vite <span className="tag-remove">×</span>
          </button>
          <button className="tag tag-warning">
            WIP <span className="tag-remove">×</span>
          </button>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="example">
        <h3>Status Indicators</h3>
        <div className="status-showcase">
          <div className="status-indicator">
            <span className="status-dot status-online"></span>
            <span>Online</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot status-offline"></span>
            <span>Offline</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot status-away"></span>
            <span>Abwesend</span>
          </div>
          <div className="status-indicator">
            <span className="status-dot status-busy"></span>
            <span>Beschäftigt</span>
          </div>
        </div>
      </div>

      {/* Button + Badge Combos */}
      <div className="example">
        <h3>Kombinationen: Button + Badge</h3>
        <div className="button-showcase">
          <button className="btn btn-primary">
            Speichern <span className="badge badge-sm">Änderungen</span>
          </button>
          <button className="btn btn-secondary">
            Senden <span className="badge badge-success badge-sm">✓</span>
          </button>
          <button className="btn btn-outline">
            Aktualisieren <span className="badge badge-count badge-sm">3</span>
          </button>
        </div>
      </div>
    </div>
  );
}
