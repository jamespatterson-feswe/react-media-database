import React from 'react';

import './modal.component.scss';

function Modal(props: { close: Function; selected: string }) {
  const renderSelected = (selected: string): any => {
    switch (selected) {
      case 'Movies':
        return <MovieForm />;
      case 'Music':
        return <MusicForm />;
      case 'Television Shows':
        return <TelevisionShowsForm />;
      case 'Video Games':
        return <VideoGameForm />;
      default:
        return undefined;
    }
  };

  return (
    <section className="modal-container">
      <div className="modal-container-header">
        <div className="modal-header">Request {props.selected}</div>
        <button onClick={() => props.close(false)}> Close </button>
      </div>
      <div className="modal-container-content">{renderSelected(props.selected)}</div>
    </section>
  );
}

export { Modal };

function MovieForm() {
  return (
    <div>
      <div>Movie Form Header</div>
      <div>Movie Form Form</div>
    </div>
  );
}

function MusicForm() {
  return (
    <div>
      <div>Music Form Header</div>
      <div>Music Form</div>
    </div>
  );
}

function TelevisionShowsForm() {
  return (
    <div>
      <div>Television Shows Form Header</div>
      <div>Television Shows Form</div>
    </div>
  );
}

function VideoGameForm() {
  return (
    <div>
      <div>Video Game Form Header</div>
      <div>Video Game Form</div>
    </div>
  );
}
