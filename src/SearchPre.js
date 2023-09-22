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
              <Link  to={`/disease/1`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Asthma</Link>
              <Link   to={`/disease/2`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Arthritis</Link>

              <Link   to={`/disease/3`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Diarrhea</Link>

              <Link   to={`/disease/4`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Digestion</Link>

              <Link  to={`/disease/5`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Fever</Link>

              <Link  to={`/disease/6`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Hypertension</Link>

              <Link  to={`/disease/7`}  onClick={() => ShowVar.setShow(!ShowVar.show)}>Goiter</Link>
 
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
            <Link  to={`/medicine/lobelia`} onClick={() => ShowVar.setShow(!ShowVar.show)}>lobelia</Link>
            <Link to={`/medicine/ephedra`} onClick={() => ShowVar.setShow(!ShowVar.show)}>ephedra</Link>

              <Link to={`/medicine/haritaki`} onClick={() => ShowVar.setShow(!ShowVar.show)}>haritaki</Link>

              <Link to={`/medicine/sandalwood`} onClick={() => ShowVar.setShow(!ShowVar.show)}>sandalwood</Link>

              <Link to={`/medicine/saffron`} onClick={() => ShowVar.setShow(!ShowVar.show)}>saffron</Link>

              <Link to={`/medicine/Bala`} onClick={() => ShowVar.setShow(!ShowVar.show)}>Bala</Link>

              <Link to={`/medicine/Brahmi`} onClick={() => ShowVar.setShow(!ShowVar.show)}>Brahmi</Link>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SearchPre;
