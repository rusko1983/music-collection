import { useEffect, useState } from "react";
import "./AlbumList.css"

export default function AlbumList() {
  const [albumList, setAlbumList] = useState([]);
  useEffect(function () {
    fetch("https://neuefische-spotify-proxy.vercel.app/api/featured")
      .then((res) => res.json())
      .then((data) => setAlbumList(data));
  }, []);

  return<div className="main__list">
  
  <ul className="album-lists">
    {
      albumList.map((list) =>(
        <li key={list.id}>
              <h2>{list.title}</h2>
              <div>
                
              <img src={list.image.url} alt={`${list.title}`} className="list-image"/>
              </div>



        </li>
      )


      )
}
  </ul>;
  </div>
}
