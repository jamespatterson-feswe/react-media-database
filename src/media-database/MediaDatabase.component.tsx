import React from 'react';

import { Header, Footer, Main } from './components/index';
import './mediaDatabase.component.scss';

function MediaDatabase() {
  return (
    <main className="media-database-container">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

export { MediaDatabase };
