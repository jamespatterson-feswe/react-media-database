import React from 'react';

// import './movies.component.scss';

function TelevisionShowSeason(props: any) {
  console.log(props);
  return (
    <div className="season-episodes">
      {props.season?.map((episode: any, index: number) => {
        return (
          <div key={index} className="episode">
            <img
              src={require('../../../assets/tv.png')}
              alt="Image to represent the many different media types available."
            />
            <p>{episode.episode}</p>
          </div>
        );
      })}
    </div>
  );
}

export { TelevisionShowSeason };
