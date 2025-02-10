import React from "react";
import "./App.css";
import Row from "./Row"; 
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="MOLTOV ORIGINALS"
        fetchUrl={requests.fetchMoltovOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

<footer className="app__footer">
  <p></p>
  <center><p>© 2024 MOLTOV. All Rights Reserved.</p></center>
</footer>
    </div>
  );
}

export default App;
