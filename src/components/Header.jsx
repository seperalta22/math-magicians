import { NavLink } from 'react-router-dom';
import '../styles/Header.module.css';

const Header = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? '#f5913e' : '' })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calculator"
            style={({ isActive }) => ({ color: isActive ? '#f5913e' : '' })}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quote"
            style={({ isActive }) => ({ color: isActive ? '#f5913e' : '' })}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
