import { Fragment, useState } from "react";
import "./AlbumCard.css";
import SongList from "./SongList";

export default function Cards({ cards }) {
  const [listTracks, setListTracks] = useState(false);
  function handleListTracks() {
     
     setListTracks((listTracks) => !listTracks)

  }

  return (
    <>
      <article>
        <ul className="cards" >
          {cards.map((card) => (
            <li key={card.id} onClick={handleListTracks} >
              <img
                src={card.image.url}
                alt={`${card.title}`}
                style={{ height: 300, width: 300 }}
              />
              <div className="title-artist">
                <h2>{card.title}</h2>
                <h2>{card.artist}</h2>
              </div>

              {listTracks && (<ul>
                  {
                    card.tracks.map( (track) => (
                 <SongList track={track}/>
                    )


                    )
                  }
                
              </ul> ) }
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
