import React from 'react';
import './mediaDatabase.component.scss';
import { Header, Footer, Main } from './components/index';

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
