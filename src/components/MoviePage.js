import { Link, useNavigate, useParams } from "react-router-dom";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import MovieDesc from "./MovieDesc";
import SimilarMovies from "./SimilarMovies";
import Footer from "./Footer";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const MoviePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in
  //       const { uid, email, displayName } = user;
  //       dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
  //       navigate(window.location.pathname);
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       navigate("/");
  //     }
  //   });
  // }, [user]);
  const { movie_id } = useParams();
  console.log(movie_id);
  useGetMovieDetails(movie_id);
  const movieDetail = useSelector((store) => store.movies.movieDetails);
  console.log(movieDetail);
  if (!movieDetail) {
    return <div>Sorry</div>;
  }

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };

  return (
    <div>
      <div className="flex justify-between absolute w-screen px-8 py-5 bg-gradient-to-b from-black z-20 items-center ">
        <Link to={"/browse"}>
          <h1 className="text-3xl text-orange-600 font-bold ">CINEMENTOR</h1>
        </Link>
        {/* <img className="w-40" src={NETFLIX_LOGO} alt="netflixLogo"></img> */}
        {user && (
          <div className=" flex justify-end items-center">
            <button
              type="button"
              onClick={handleSignout}
              className="text-orange-600 bg-transparent border border-orange-600 hover:bg-neutral-800 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
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
