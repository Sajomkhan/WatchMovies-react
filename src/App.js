import { useEffect, useState } from "react";

//https://omdbapi.com/apikey.aspx?__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkaGRkZGQCAw8QDxYCHwBnZGRkZAIFDxYCHgdWaXNpYmxlaGQCBw8WAh8BZ2QCAg8WAh8BaGQCAw8WAh8BaGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQtwYXRyZW9uQWNjdAUIZnJlZUFjY3SZmkfBgEVOtEhBRPgn0xJZZDjfMEiMoho3O8lIVPYLXg%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAhq8u7G6E8iNQTDLBqGZykXmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYphdL1XrNEjnC%2FKjNya%2Bmqh8hRPnM5dWgso2y7bj7kVNLSFbtYIt24Lw6ktxrd5Z67%2F4LFSTzFfbXTFN5VgQX9Nbzfg78Z8BXhXifTCAVkevd2U20ItIGqFIf8giu%2B0PAasvwu4KgXUo9rywyT%2ByOXGt&at=freeAcct&Email2=sajomkhan%40gmail.com&FirstName=Saiful&LastName=Ajom+Khan&TextArea1=for+practice+purpose&Button1=Submit

// const movie1 = {
//   Title: "Amazing Spiderman Syndrome",
//   Year: "2012",
//   imdbID: "tt2586634",
//   Type: "movie",
//   Poster: "N/A",
// };

//6dbc3732

import MovieCard from "./MovieCard";
import "./App.css";
import searchIcon from "./search.svg";


const API_URL = "http://www.omdbapi.com?apikey=6dbc3732";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);    
  };
  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
            src={searchIcon} 
            alt="search icon" 
            onClick={() => searchMovies(searchTerm)} 
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
