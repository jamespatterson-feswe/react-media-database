import React, { useState } from 'react';

import { Header, Footer, Main } from './components/index';
import './mediaDatabase.component.scss';

function MediaDatabase() {
  const [selections] = useState(['Movies', 'Music', 'Television Shows', 'Video Games']);
  const [selected, setSelected] = useState(selections[0]);

  return (
    <main className="media-database-container">
      <Header selected={selected} setSelected={setSelected} />
      <Main selections={selections} selected={selected} setSelected={setSelected} />
      <Footer />
    </main>
  );
}

export { MediaDatabase };
