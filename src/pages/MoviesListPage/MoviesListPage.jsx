import MovieCard from "../../components/MovieCard/MovieCard"
import "./MoviesListPage.css"

export default function MoviesListPage(props) {
  return (
    <div className="container">
      {
        props.movies.map(movie => {
          return <MovieCard key={movie.title} movie={movie} />
        })
      }
    </div>
  )
}