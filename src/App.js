import NavBar from "./components/navbar/NavBar.js";

import AlbumList from "./components/api/AlbumList.js";
import "./App.css";

import { useEffect, useState } from "react";
import SearchBar from "./components/navbar/SearchBar.js";
function App() {
  const [albumList, setAlbumList] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      async function fetchMusic() {
        try {
          setIsLoding(true);
          const res = await fetch(
            `https://neuefische-spotify-proxy.vercel.app/api/search?artist=${query}}`
          );
          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();
          setAlbumList(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoding(false);
        }
      }
      fetchMusic();
    },
    [query]
  );
  function handleSearch(query) {
    setQuery(query)
      
  }




  return (
    <div className="app">
      <div className="app-1">
        <NavBar />
        <SearchBar query={query} setQuery={setQuery} onSubmit={handleSearch}   />
        {isLoding ? "LODING..." : <AlbumList albumList={albumList} />}
      </div>
    </div>
  );
}

export default App;
