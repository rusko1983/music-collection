import { useEffect, useState } from "react";

export default function AlbumList() {
  const [albumList, setAlbumList] = useState([]);
  useEffect(function () {
    fetch("https://neuefische-spotify-proxy.vercel.app/api/featured")
      .then((res) => res.json())
      .then((data) => setAlbumList(data));
  }, []);

  return <ul>
    {
      albumList.map((list) =>(
        <li key={list.id}>
              <h2>{list.title}</h2>
              <div>
                {list.image.url}
              </div>



        </li>
      )


      )
}
  </ul>;
}
