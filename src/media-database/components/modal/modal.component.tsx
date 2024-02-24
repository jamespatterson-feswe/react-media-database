import React from 'react';

// import './modal.component.scss';

function Modal(props: { close: Function }) {
  return (
    <section className="modal-container">
      <div className="modal" onClick={props.close(false)}>
        works!
      </div>
    </section>
  );
}

export { Modal };
