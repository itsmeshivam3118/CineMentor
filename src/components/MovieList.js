import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [isScrollableLeft, setIsScrollableLeft] = useState(false);
  const [isScrollableRight, setIsScrollableRight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsScrollableLeft(scrollLeft > 0);
      setIsScrollableRight(scrollLeft < scrollWidth - clientWidth);
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    scrollRef.current.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => scrollRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 1100, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -1100, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };
  //console.log(movies);

  return (
    <div className="relative px-6  ">
      <h1 className="text-3xl py-2 pt-8">{title}</h1>
      <div
        className="flex overflow-x-scroll scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        ref={scrollRef}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              movie_id={movie.id}
              imgPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
      {isScrollableLeft && (
        // <button
        //   onClick={scrollLeft}
        //   className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md"
        // >
        //   &#9664; {/* Left arrow character */}
        // </button>
        <button
          onClick={scrollLeft}
          type="button"
          className="absolute top-0 start-3 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/60 dark:group-hover:bg-gray-800/70 group-focus:ring-4  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              //xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
      )}
      {isScrollableRight && (
        // <button
        //   onClick={scrollRight}
        //   className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md focus:outline-none focus:ring-0"
        // >
        //   &#9654; {/* Right arrow character */}
        // </button>
        <button
          onClick={scrollRight}
          type="button"
          class="absolute top-0 end-3 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/60 dark:group-hover:bg-gray-800/70 group-focus:ring-4  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white  rtl:rotate-180"
              aria-hidden="true"
              //xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      )}
    </div>
  );
};

export default MovieList;
