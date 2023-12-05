import Navigation from "./components/navbar/Navigation"
import AllAlbums  from "./components/main/AllAlbums.js"
//import Cards from "./components/main/AlbumCard.js";
import AlbumList from "./components/api/AlbumList.js";
import "./App.css"
import  Db  from "./db.js"
//import { useState } from "react";
function App() {
  //const [cards,setCards] = useState(Db)
  return (
    <div className="app">
      <div className="app-1">
      <Navigation />
     <AlbumList />
      <AllAlbums cards={Db}  />
       </div>
    </div>
  );
}

export default App;
