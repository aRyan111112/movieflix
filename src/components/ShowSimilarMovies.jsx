import React from 'react'
import useSimilarMovies from "../hooks/useSimilarMovies";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const ShowSimilarMovies = ({id}) => {
  const similarMovies = useSelector((store) => store.movies?.similarMovies)
  useSimilarMovies(id)

  return (
    <>
    {similarMovies?.length !== 0 ? (<MovieList title="Similar Movies" movies={similarMovies}/>) : null}
    </>
  )
}

export default ShowSimilarMovies