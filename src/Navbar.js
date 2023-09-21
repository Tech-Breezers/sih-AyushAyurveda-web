import { motion, AnimatePresence } from "framer-motion";
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
        <motion.li
          initial={{
            y: -50
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 1
          }}
        >
          <p onClick={() => SearchPreCall()}>
            <FaSearch />
            Search
          </p>
        </motion.li>
        <motion.li
          initial={{
            y: -50
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 1
          }}
        >
          <Link to={'/Encyclopedia'} element={<Encyclopedia />}><FaBookOpen />Encyclopedia</Link>
        </motion.li>
        <motion.li
          initial={{
            y: -50
          }}
          animate={{
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 1
          }}
        >
          <a href="/"><FaUserAlt />Login</a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default NavBar;
