import { useState } from "react";
import "./AlbumCard.css";
import SongList from "./SongList";

export default function Cards({  title,image,artist,tracks }) {
  const [listTracks, setListTracks] = useState(false);
  function handleListTracks() {
     
     setListTracks((listTracks) => !listTracks)

  }

  return (
    
        <li onClick={handleListTracks}>
        
              <img 
                src={image.url}
                alt={`${title}`}
                style={{ height: 300, width: 300 }}
              />
              <div className="title-artist">
                <h2>{title}</h2>
                <h2>{artist}</h2>
              </div>

             {listTracks && <SongList tracks={tracks} />}
        </li>
    
  );
}
