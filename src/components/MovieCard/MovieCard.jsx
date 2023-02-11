import { Link } from "react-router-dom"

export default function MovieCard(props) {
  return (
    <>
      <Link to={`/movies/${props.movie.title}`} className="movie-link">
        <div style={{"background": `url(${props.movie.poster_path}) no-repeat center center`, "WebkitBackgroundSize": "cover"}} className="item-card">
          <div className="title">
            <h1>{props.movie.title}</h1>
            <h4>Released: {props.movie.release_date}</h4>
          </div>
        </div>
      </Link>
    </>
  );
}