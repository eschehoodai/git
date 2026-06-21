import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import LayoutSection from './components/sections/LayoutSection';
import TypographySection from './components/sections/TypographySection';
import FormSection from './components/sections/FormSection';
import type { SectionId } from './sections';

function App() {
  const [active, setActive] = useState<SectionId>('layout');

  return (
    <div className="app">
      <Sidebar active={active} onSelect={setActive} />
      <main className="main">
        {active === 'layout' && <LayoutSection />}
        {active === 'typography' && <TypographySection />}
        {active === 'forms' && <FormSection />}
        {active !== 'layout' && active !== 'typography' && active !== 'forms' && (
          <div className="section">
            <h2>Diese Sektion ist noch nicht implementiert</h2>
            <p className="section-intro">
              Wir erweitern die Galerie Schritt für Schritt.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
