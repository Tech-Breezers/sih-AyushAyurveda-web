import React from 'react'
import './Footer.css'
import logo from "./favicon - ayurveda.png";
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <footer>
        <span>
            <a href="#" className="logoContainer">
            <img src={logo} />
            <span>
            <h1 style={{ color : 'var(--light-mode-background)' }}>AYUSH</h1>
            <p style={{ color : 'var(--light-mode-background)' }}>AYURVEDA</p>
            </span>
        </a>
        </span>
        <span className='columnLinks'>
            <h3>Diseases</h3>
                <Link  to={`/disease/1`}>Asthma</Link>
              <Link   to={`/disease/2`}>Arthritis</Link>

              <Link   to={`/disease/3`}>Diarrhea</Link>

              <Link   to={`/disease/4`}>Digestion</Link>

              <Link   to={`/disease/5`}>Fever</Link>

              <Link   to={`/disease/6`}>Hypertension</Link>

              <Link   to={`/disease/7`}>Goiter</Link>
        </span>

        <span className='columnLinks'>
            <h3>Medicines</h3>
            <Link  to={`/medicine/lobelia`}>lobelia</Link>
              <Link   to={`/medicine/ephedra`}>ephedra</Link>

              <Link   to={`/medicine/haritaki`}>haritaki</Link>

              <Link   to={`/medicine/sandalwood`}>sandalwood</Link>

              <Link   to={`/medicine/saffron`}>saffron</Link>

              <Link   to={`/medicine/Bala`}>Bala</Link>

              <Link   to={`/medicine/Brahmi`}>Brahmi</Link>
        </span>

        <span id="socialLinks">
            <Link>            <FaFacebook /> 
</Link>
<Link>            <FaLinkedin /> 
</Link>
<Link>            <FaInstagram /> 
</Link>
            
        </span>
        <span id='mainLinks'>
            <iframe loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdU0Mp2HiDDkR-H568wVWZps&key=AIzaSyC75AbUN0lZD-Uk7oCrnXNkTavpsogqvOw"></iframe>
                
                <Link>Ph: 24651955, 24651935<br /> Fax: 24651936</Link>

        </span>
    </footer>
  )
}

export default Footer