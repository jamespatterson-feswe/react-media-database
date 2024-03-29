import React, { useState } from 'react';

import { Header, Footer, Main, Modal } from './components/index';
import './mediaDatabase.component.scss';
import { createPortal } from 'react-dom';

function MediaDatabase() {
  const [selections] = useState(['Movies', 'Music', 'Television Shows', 'Video Games']);
  const [selected, setSelected] = useState(selections[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="media-database-container">
      {isModalOpen &&
        createPortal(<Modal close={setIsModalOpen} selected={selected} />, document.body)}
      <Header
        selected={selected}
        setSelected={setSelected}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Main selections={selections} selected={selected} setSelected={setSelected} />
      <Footer />
    </main>
  );
}

export { MediaDatabase };
