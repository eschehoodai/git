import type { SectionId } from '../sections';

interface SidebarProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}

const sections: { id: SectionId; label: string; icon: string }[] = [
  { id: 'layout', label: 'Layout', icon: '▦' },
  { id: 'typography', label: 'Typografie', icon: 'A' },
  { id: 'forms', label: 'Formulare', icon: '▢' },
  { id: 'buttons', label: 'Buttons & Badges', icon: '●' },
  { id: 'tables', label: 'Tabellen & Daten', icon: '☰' },
  { id: 'modals', label: 'Modals & Overlays', icon: '◳' },
  { id: 'alerts', label: 'Alerts & Toasts', icon: '⚠' },
  { id: 'navigation', label: 'Navigation', icon: '☰' },
  { id: 'progress', label: 'Fortschritt & Lade', icon: '◐' },
  { id: 'media', label: 'Medien', icon: '▶' },
  { id: 'graphics', label: 'SVG, Canvas & Charts', icon: '◈' },
  { id: 'animation', label: 'Animationen', icon: '✦' },
  { id: 'interactive', label: 'Akkordeon & Karussell', icon: '◧' },
];

export default function Sidebar({ active, onSelect }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>UI Showcase</h1>
        <p>React + TSX</p>
      </div>
      <nav>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                className={active === s.id ? 'nav-item active' : 'nav-item'}
                onClick={() => onSelect(s.id)}
              >
                <span className="nav-icon">{s.icon}</span>
                <span>{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
