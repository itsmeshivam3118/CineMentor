import { useNavigate, useParams } from "react-router-dom";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { useDispatch, useSelector } from "react-redux";

import MovieDesc from "./MovieDesc";
import SimilarMovies from "./SimilarMovies";
import Footer from "./Footer";

import Header from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const MoviePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movie_id } = useParams();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate(`/moviePage/${movie_id}`);
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  console.log(movie_id);
  useGetMovieDetails(movie_id);
  const movieDetail = useSelector((store) => store.movies.movieDetails);
  console.log(movieDetail);
  if (!movieDetail) {
    return <div>Sorry</div>;
  }

  return (
    <div>
      <Header />
      <div>
        <MovieDesc movieDetail={movieDetail} movie_id={movie_id} />
      </div>
      <div>
        <SimilarMovies movie_id={movie_id} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MoviePage;
