import "./SearchBar.css";

export default function SearchBar({ query, setQuery,onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();

 onSubmit(query)


  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="insert the name"
        value={query}
       onChange={(e) => setQuery(e.target.value)}
      />

      <button>SEARCH</button>
    </form>
  );
}
