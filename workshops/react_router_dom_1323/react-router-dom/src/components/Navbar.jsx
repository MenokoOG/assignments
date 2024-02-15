import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h3>React-Router-Dom</h3>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/item">
          <button>Inventory</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar
