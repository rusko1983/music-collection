import NavBar from "./components/navbar/NavBar.js"
import AllAlbums  from "./components/main/AllAlbums.js"
//import Cards from "./components/main/AlbumCard.js";
import AlbumList from "./components/api/AlbumList.js";
import "./App.css"
import  Db  from "./db.js"
import {  useEffect,useState } from "react";
function App() {
  //const [cards,setCards] = useState(Db)
  const [albumList, setAlbumList] = useState([]);
  useEffect(function () {
    fetch("https://neuefische-spotify-proxy.vercel.app/api/featured")
      .then((res) => res.json())
      .then((data) => setAlbumList(data));
  }, []);
  return (
    <div className="app">
      <div className="app-1">
      <NavBar />
     <AlbumList  albumList={albumList} setAlbumList={setAlbumList}        />
      <AllAlbums cards={Db}  />
       </div>
    </div>
  );
}

export default App;
