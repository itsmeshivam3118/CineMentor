import React, { useEffect, useState } from "react";
import Header from "./Header";
import useSearchMovies from "../hooks/useSearchMovies"; // Import your custom hook
import MovieCard from "./MovieCard";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/search");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const searchResults = useSearchMovies(searchQuery); // Use the hook to fetch results

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query as the user types
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <div className="w-4/5  mx-auto py-24">
        {/* Search Bar */}
        <div className="text-4xl font-bold">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-full p-3 bg-transparent text-white border-b-2 border-white focus:outline-none focus:ring-0 placeholder-white"
          />
        </div>

        {/* Search Results */}
        <div className="mt-8 text-white">
          {searchResults && searchResults.results ? (
            <div className="grid grid-cols-5 gap-4">
              {searchResults.results.map((movie) => (
                <MovieCard
                  key={movie.id}
                  imgPath={movie.poster_path}
                  movie_id={movie.id}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-500"></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
