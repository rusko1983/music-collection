import "./AlbumList.css";
import AlbumCard from "../main/AlbumCard";
export default function AlbumList({ albumList }) {
  return (
    <div className="main__list">
      <ul className="album-lists">
        {albumList.map((list) => (
          <li key={list.id}>
           <AlbumCard  data={list}/>
          </li>
        ))}
      </ul>
      ;
    </div>
  );
}
