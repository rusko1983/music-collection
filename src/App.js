import Navigation from "./components/navbar/Navigation"
import Cards from "./components/main/AlbumCard.js";
import AlbumList from "./components/api/AlbumList.js";
import  Db  from "./db.js"
//import { useState } from "react";
function App() {
  //const [cards,setCards] = useState(Db)
  return (
    <div className="App">
      <Navigation />
      <AlbumList/>
      <Cards cards={Db}  />
      
    </div>
  );
}

export default App;
