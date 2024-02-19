import React from 'react';

/**
 * @note This component is being removed/injected from an element via the television-shows component
 *  since this is being appending programmatically, the styles will need to be handled via the component being injected into
 */
function TelevisionShowSeason(props: any) {
  return (
    <div className="season-episodes">
      {props.season?.map((episode: any, index: number) => {
        console.log(episode);
        return (
          <div key={index} className="episode">
            <img
              src={require('../../../assets/tv.png')}
              alt="Image to represent the many different media types available."
            />
            <p>
              {episode?.show} - {episode?.season} -{' '}
              {episode?.episode?.replace(`${episode?.show} `, '')}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export { TelevisionShowSeason };
