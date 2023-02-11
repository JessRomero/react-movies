import { Link } from 'react-router-dom';

export default function NavBar({ user }) {
  return (
    <nav>
      <h1>Welcome{user.name}</h1>
      <Link to="/">Movies List</Link>
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List</Link>
    </nav>
  );
}
