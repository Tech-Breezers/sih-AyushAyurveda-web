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
              <Link  to={'/Encyclopedia'}>View All</Link>
            </span>
            <span className="line"></span>
            <span className="linksContainer">
              <Link reloadDocument  to={`/disease/1`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Asthma</Link>
              <Link reloadDocument   to={`/disease/2`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Arthritis</Link>

              <Link  reloadDocument  to={`/disease/3`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Diarrhea</Link>

              <Link reloadDocument   to={`/disease/4`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Digestion</Link>

              <Link  reloadDocument to={`/disease/5`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Fever</Link>

              <Link  reloadDocument to={`/disease/6`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Hypertension</Link>

              <Link reloadDocument  to={`/disease/7`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Goiter</Link>
 
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
              <Link  to={'/Encyclopedia'}>View All</Link>
            </span>
            <span className="line"></span>
            <span className="linksContainer">
            <Link  to={`/medicine/lobelia`}>lobelia</Link>
              <Link reloadDocument  to={`/medicine/ephedra`}>ephedra</Link>

              <Link reloadDocument  to={`/medicine/haritaki`}>haritaki</Link>

              <Link reloadDocument  to={`/medicine/sandalwood`}>sandalwood</Link>

              <Link reloadDocument  to={`/medicine/saffron`}>saffron</Link>

              <Link reloadDocument  to={`/medicine/Bala`}>Bala</Link>

              <Link reloadDocument  to={`/medicine/Brahmi`}>Brahmi</Link>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchPre;
