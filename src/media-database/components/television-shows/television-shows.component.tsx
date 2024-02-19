import React, { useState } from 'react';

import './television-shows.component.scss';
import { TelevisionShowSeason } from '../television-show-season/tv-show-season.component';
import { createRoot } from 'react-dom/client';

function Television(props: any) {
  const [injected, setInjected] = useState([] as string[]);
  const injectTvShowSeason = (_index: number, _show: string, _season: any) => {
    let tempSeason = JSON.parse(JSON.stringify(_season));
    if (!Array.isArray(_season)) {
      const seasons: any[] = [];
      for (const key in _season) {
        if (Object.prototype.hasOwnProperty.call(_season, key)) {
          seasons.push(_season[key]);
        }
      }
      tempSeason = seasons.flat();
    }
    const showEpisodesElement = document.getElementsByClassName(`${_show}-episodes`)?.[0];
    showEpisodesElement?.children?.[0]?.remove();
    const found = injected.findIndex((s) => s === _show);
    if (found < 0) {
      setInjected(injected.concat([_show]));
      const seasonEpisodes = createRoot(showEpisodesElement);
      seasonEpisodes.render(<TelevisionShowSeason season={tempSeason} />);
    } else {
      injected.splice(found, 1);
      setInjected(injected);
    }
  };

  return (
    <section className="television-shows-container">
      <div className="television-shows">
        {props.shows?.map((show: Record<string, any>, index: number) => {
          return (
            <div className="television-show-card" key={index}>
              <div className="img-container">
                <img
                  src={require('../../../assets/not-found.png')}
                  alt="Image that says not found"
                />
                <div className="title-genre-seasons">
                  <div className="title">{Object.keys(show)[0]}</div>
                  <hr />
                  <div className="genre">{'Genre'}</div>
                  <hr />
                  <div className="seasons">
                    {Object.keys(props.shows[index][Object.keys(show)[0]])?.map((season, ind) => {
                      return season !== 'desktop.ini' ? (
                        <button
                          key={ind}
                          onClick={() => {
                            injectTvShowSeason(
                              ind,
                              Object.keys(show)[0],
                              props.shows[index][Object.keys(show)[0]][season]
                            );
                          }}
                          className="season-btn"
                        >
                          {season}
                        </button>
                      ) : undefined;
                    })}
                  </div>
                </div>
              </div>
              <hr />
              <div className={Object.keys(show)[0] + '-episodes'} id="episodes">
                <section className="season-content"></section>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { Television };
