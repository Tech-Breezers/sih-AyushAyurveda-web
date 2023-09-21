import "./Search.css";
import "./styles.css";
import "./SearchPre.css";
import logo from "./favicon - ayurveda.png";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Show } from './Navbar.js'
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import './SearchContainer.css'

const SearchPre = () => {

  const ShowVar = useContext(Show)


  return (
    <section id="SearchABS">
      <div id="navbar">
        <a href="#" className="logoContainer">
          <img src={logo} />
          <span>
            <h1>AYUSH</h1>
            <p>AYURVEDA</p>
          </span>
        </a>
        <span id="crossContainer" onClick={() => ShowVar.setShow(!ShowVar.show)}>
          <FaTimes />
        </span>
      </div>

      <SearchBar />

      <div id="boxContainer">
        <div>
          <span className="box">
            <span className="dataHeading">
              <h3>Conditions</h3>
              <Link target="_blank" to={'/Encyclopedia'}>View All</Link>
            </span>
            <span className="line"></span>
            <span className="linksContainer">
              <Link target="_blank" to={`/disease/1`}>Asthma</Link>
              <Link  target="_blank" to={`/disease/2`}>Arthritis</Link>

              <Link  target="_blank" to={`/disease/3`}>Diarrhea</Link>

              <Link  target="_blank" to={`/disease/4`}>Digestion</Link>

              <Link  target="_blank" to={`/disease/5`}>Fever</Link>

              <Link  target="_blank" to={`/disease/6`}>Hypertension</Link>

              <Link  target="_blank" to={`/disease/7`}>Goiter</Link>
 
            </span>
          </span>
        </div>
        <div>
          {/* <span className="box">
            <span className="dataHeading">
              <h3>Symptoms</h3>
              <a href="#">View All</a>
            </span>
            <span className="line"></span>
            <span className="linksContainerC">
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
              <a href="#">Symptoms 1</a>
            </span>
          </span> */}

          <span className="box">
            <span className="dataHeading">
              <h3>Herbs</h3>
              <Link target="_blank" to={'/Encyclopedia'}>View All</Link>
            </span>
            <span className="line"></span>
            <span className="linksContainer">
            <Link target="_blank" to={`/medicine/lobelia`}>lobelia</Link>
              <Link  target="_blank" to={`/medicine/ephedra`}>ephedra</Link>

              <Link  target="_blank" to={`/medicine/haritaki`}>haritaki</Link>

              <Link  target="_blank" to={`/medicine/sandalwood`}>sandalwood</Link>

              <Link  target="_blank" to={`/medicine/saffron`}>saffron</Link>

              <Link  target="_blank" to={`/medicine/Bala`}>Bala</Link>

              <Link  target="_blank" to={`/medicine/Brahmi`}>Brahmi</Link>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchPre;
