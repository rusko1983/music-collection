import { useState } from "react";
import "./AlbumCard.css";
import SongList from "./SongList";

export default function AlbumCard({  title,image,artist,tracks }) {
  const [listTracks, setListTracks] = useState(false);
  function handleListTracks() {
     
     setListTracks((listTracks) => !listTracks)

  }

  return (
    
        <li onClick={handleListTracks} className="list__tracks">
         <div className="main__image__container">
              <img 
                src={image.url}
                alt={`${title}`}
               
                className="album-clas-image"
              />
              </div>
              <div className="title-artist">
                <h2>{title}</h2>
                <h2>{artist}</h2>
              </div>

             {listTracks && <SongList tracks={tracks} />}
        </li>
    
  );
}
