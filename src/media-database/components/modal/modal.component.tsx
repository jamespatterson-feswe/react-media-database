import React from 'react';

import './modal.component.scss';
import { MovieForm, MusicForm, TelevisionShowsForm, VideoGameForm } from './components';

const mapping: Record<string, string> = {
  Movies: 'a movie or movies',
  Music: 'an album',
  'Television Shows': 'a series, season, or episode',
  'Video Games': 'a video game or series of games'
};

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
        <div className="modal-header">Request {mapping[props.selected]}</div>
        <button onClick={() => props.close(false)}> Close </button>
      </div>
      <div className="modal-container-content">{renderSelected(props.selected)}</div>
    </section>
  );
}

export { Modal };
