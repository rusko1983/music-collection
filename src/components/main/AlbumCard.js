import { useState } from "react";
import "./AlbumCard.css";
import SongList from "./SongList";

export default function AlbumCard({  data}) {
  const [listTracks, setListTracks] = useState(false);
  function handleListTracks() {
     
     setListTracks((listTracks) => !listTracks)

  }

  return (
    
        <li onClick={handleListTracks} className="list__tracks">
         <div className="main__image__container">
              <img 
                src={data.image.url}
                alt={`${data.title}`}
               
                className="album-clas-image"
              />
              </div>
              <div className="title-artist">
                <h2>{data.title}</h2>
                <h2>{data.artist}</h2>
              </div>

             {listTracks && <SongList tracks={data.tracks} />}
        </li>
    
  );
}
