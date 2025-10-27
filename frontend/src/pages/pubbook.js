import React, { useState } from "react";

export function VirtualLibrary() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [visible, setVisible] = useState(30); // show first 30 books
  const [loading, setLoading] = useState(false);

  async function searchBooks() {
    if (!query) return alert("Please type a book title or author!");
    setLoading(true);
    setBooks([]);
    setVisible(30);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setBooks(data.docs); // keep all results
    } catch (error) {
      console.error("Error fetching books:", error);
    }

    setLoading(false);
  }

  function loadMore() {
    setVisible((prev) => prev + 30); // show 30 more
  }

  return (
    <div className="page">
      <h1>📚 Virtual Library</h1>
      {/* API Notice */}
      <p style={{ textAlign: "center", fontSize: "14px", color: "#555" }}>
        Powered by{" "}
        <a
          href="https://openlibrary.org/developers/api"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#1abc9c", textDecoration: "none", fontWeight: "bold" }}
        >
          Open Library API
        </a>
      </p>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchBooks()}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {loading && <p>Searching books...</p>}

      {/* Bookshelf grid */}
      <div className="bookshelf">
        {books.slice(0, visible).map((book, idx) => {
          const cover = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : "https://via.placeholder.com/150x200?text=No+Cover";

          return (
            <div key={idx} className="book-card">
              <img src={cover} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name[0] : "Unknown"}</p>
              {book.ia && (
                <a
                  href={`https://archive.org/details/${book.ia[0]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="read-link"
                >
                  📖 Read
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Load More */}
      {visible < books.length && (
        <div className="load-more">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
}
