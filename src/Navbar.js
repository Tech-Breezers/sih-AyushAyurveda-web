import "./Navbar.css";
import "./styles.css";
import './SearchPre.css'
import logo from "./favicon - ayurveda.png";
import SearchPre from "./SearchPre";
import React , { useState } from "react";
import { FaSearch, FaBookOpen,FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Encyclopedia from "./Encyclopedia";

export const Show = React.createContext()

const NavBar = () => {

  const [show, setShow] = useState(false)


  const SearchPreCall = () => {
    setShow(!show)
  }

  return (
    <nav>

      <Show.Provider value={{ show, setShow}}>
        {show && <SearchPre />}
      </Show.Provider>


      <Link to="/" className="logoContainer">
        <img src={logo} />
        <span>
          <h1>AYUSH</h1>
          <p>AYURVEDA</p>
        </span>
      </Link>
      <ul>
        <li>
          <p onClick={() => SearchPreCall()}>
            <FaSearch />
            Search
          </p>
        </li>
        <li>
          <Link to={'/Encyclopedia'} element={<Encyclopedia />}><FaBookOpen />Encyclopedia</Link>
        </li>
        <li
         
        >
          <a href="/"><FaUserAlt />Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
