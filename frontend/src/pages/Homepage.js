// src/pages/Home.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Home() {
  return (
    <div className="min-vh-100 bg-light">

      {/* Header */}
      <header className="sticky-top bg-white border-bottom shadow-sm">
        <div className="container d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <a href="#" className="text-success fw-bold fs-3 d-flex align-items-center gap-2 text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H18a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 19.5zM6 4v15.5A.5.5 0 0 0 6.5 20H18V4H6zM8 7h8v2H8V7zm0 4h8v2H8v-2z"/>
            </svg>
            Petalflip
          </a>

          {/* Nav */}
          <nav className="d-none d-lg-flex gap-3 fw-semibold">
            <a href="#" className="text-dark text-decoration-none">Browse</a>
            <a href="#" className="text-dark text-decoration-none">My Shelf</a>
            <a href="#" className="text-dark text-decoration-none">Friends</a>
          </nav>

          {/* Action Buttons */}
          <div className="d-none d-sm-flex gap-2">
            <button className="btn btn-outline-secondary btn-sm">Log In</button>
            <button className="btn btn-success btn-sm">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="d-lg-none">
            <button className="btn btn-outline-secondary btn-sm">Menu</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-4 fw-bold">Where good books and good friends meet.</h1>
            <p className="lead my-4">
              Welcome to Petalflip, your cozy digital library. Discover, buy, and build your personal shelf. Then, share the stories you love with the people you know.
            </p>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
              <a href="#" className="btn btn-success btn-lg shadow-sm">Browse Bestsellers</a>
              <a href="#" className="btn btn-outline-dark btn-lg shadow-sm">Start Your Shelf</a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src="https://placehold.co/600x500/F28F79/FDFBF6?text=Illustration%0APeople+reading+in+a+cozy+space"
              className="img-fluid rounded-3 shadow-lg"
              alt="Illustration of people reading books in a comfortable, plant-filled room"
            />
          </div>
        </div>
      </main>

      {/* Book Carousel */}
      <section className="container py-5">
        <h2 className="h3 fw-bold mb-4">New & Trending</h2>
        <div className="d-flex overflow-auto gap-3 pb-2">
          {[1,2,3,4,5].map((book) => (
            <div key={book} className="flex-shrink-0" style={{width: '12rem'}}>
              <img
                src="https://placehold.co/300x450/cccccc/333333?text=Book+Cover"
                className="img-fluid rounded shadow mb-2"
                alt={`Book ${book}`}
              />
              <h5 className="text-truncate mb-1">Book Title {book}</h5>
              <p className="text-muted mb-1">Author Name</p>
              <div className="text-warning">★★★★☆ <span className="text-muted">(1,230)</span></div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            {[1,2,3].map((feature) => (
              <div key={feature} className="col-md-4 mb-4">
                <div className="d-flex align-items-center justify-content-center mb-3" style={{height: '60px', width: '60px', margin: '0 auto', backgroundColor: '#d1f2eb', borderRadius: '15px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#00BFA6">
                    <path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.757A4.25 4.25 0 0 0 12.75 3h-1.5A4.25 4.25 0 0 0 7 7.243V8H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zM5 10h14v10H5V10zm2-1.757A2.25 2.25 0 0 1 9.25 6h1.5A2.25 2.25 0 0 1 13 8.243V9H9v-.757z"/>
                  </svg>
                </div>
                <h5 className="fw-bold">Feature {feature}</h5>
                <p className="text-muted">Description for feature {feature} explaining why it’s useful to users.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-top py-4 mt-5">
        <div className="container text-center text-muted small">
          &copy; 2025 Petalflip. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
