import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Arama parametresini search state'ine atama
    setSearch(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Arama parametresini güncelleme
    setSearchParams({ q: search });
    console.log("Aranan kelime:", search);
  };
  

  return (
    <div>
      <h1>Blog Page</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        <li>
          <Link to="#">Konu-1</Link>
        </li>
        <li>
          <Link to="#">Konu-2</Link>
        </li>
      </ul>
    </div>
  );
}
