import { useState, useEffect } from "react";
import "./SearchContainer.css";
import "./styles.css";
import { Link, useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const SearchContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://16.16.68.203:3001/api/suggest/dis').then((res) => {
      res.json().then((data) => {
        setData(data)
      })
    })
  }, [])

  return (
    <>
    <div id="SearchContainer" style={{ backgroundImage : 'url('+process.env.PUBLIC_URL+'back.jpg)', backgroundSize : 'cover' }}>
      <h1>Knowledge of Life</h1>
      <h3>षड् दोषाः पुरुषेणेह हातव्या भूतिमिच्छता।</h3>
      <h3>निद्रा तद्रा भयं क्रोधः आलस्यं दीर्घसूत्रता ॥</h3>
      {/* <div id="searchBox">
        <span id="searchArea">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => {makeBlur()}}
            placeholder="Enter your query here"
          />
          <span><FaSearch /></span>
          
        </span>
        <div id="dropdown"  onBlur={() => makeFocus()}   style={{ display : 'none' }}>
          {dropdownData.map((e) => {
            return (
              <Link to={`disease/${e.id}`}>
                <p>{e.disease}</p>
              </Link>
            );
          })}
        </div>
      </div> */}
      <SearchBar />
      <span id="tagsContainer">
      {
        data.map((e) => {
          return <Link to={`/disease/${e.id}`} >
            {e.disease}
          </Link>
        })
      }
      </span>
      
    </div>
    <span id="imagesContainer">
      <img src={process.env.PUBLIC_URL+'bw.png'} />
      <img src={process.env.PUBLIC_URL+'bw (2).png'} />
    </span>

    <section id="extraContent">
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (1).png'} />
        <span>
          <h1>Prana</h1>
          <p>Prana is known as the 'life energy' and activates both the body and mind in Ayurvedic medicinal systems. It is contained in the head and controls the main functions of the mind, including emotions, memory and thought. Additionally, prana kindles the bodily fire ‘Agni’ and therefore controls the function of the heart and, via the bloodstream, other vital organs (dhatus).</p>
        </span>
      </div>
            <div>
        <img src={process.env.PUBLIC_URL+'/cover (2).png'} />
        <span>
          <h1>Bhutas</h1>
          <p>Bhutas are the five basic elements of Ayurveda—ether (or space), air, fire, water and earth. They are seen as manifestations of energy and can be equated to the five senses of hearing, vision, touch, taste and smell. In turn, these senses are associated with a particular sense organ (or organs) of the body, which impact on other ‘organs of activity’ and result in actions being carried out by the body. </p>
        </span>
      </div>
            
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (3).png'} />
        <span>
          <h1>Tridosha</h1>
          <p>Tridosha are the three humours or basic forces that manifest in the human body. They are formed from the five bhutas and are known as vata, pitta and kapha. The tridosha govern all functions of the body and mind and, by understanding the relationship between them, a vaid may make a diagnosis of the disease affecting a patient.</p>
        </span>
      </div>
            
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (4).png'} />
        <span>
          <h1>Prakruti</h1>
          <p>Prakruti is a description of the human constitution—the ‘type’ of person you are. It is believed the individual's prakruti is determined by the parents' prakruti at the time of conception. A vaid can analyse a patient's constitution by looking at how his or her tridosha combine. Most people are a combination of dosha elements, and can be described as vata-pitta or pitta-kapha for instance.</p>
        </span>
      </div>
            
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (5).png'} />
        <span>
          <h1>Agni</h1>
          <p>Agni is known as the 'digestive fire' and governs metabolic processes. It is essentially pitta in nature. Agni can become impaired by an imbalance in the tridosha and therefore affect metabolism. In these circumstances, food will not be digested or absorbed properly, and toxins will be produced in the intestines and may find their way into the circulation.</p>
        </span>
      </div>
            
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (6).png'} />
        <span>
          <h1>Ama</h1>
          <p>Ama are the waste products of the body—faeces, urine and sweat—and are the root cause of disease. Their appearance and properties can give many indications of the state of the tridosha and therefore health. For example, a patient suffering from a pitta disorder, such as fever or jaundice, may have dark urine. </p>
        </span>
      </div>
            
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (7).png'} />
        <span>
          <h1>Dhatus</h1>
          <p>Dhatus are the seven tissues or organs of which the human body is composed. Therefore any imbalance in the tridosha directly affects the dhatus. Dhatus are those substances that are retained in the body and always rejuvenated or replenished. The dhatus do not correspond to our definition of anatomy, but are more a tissue type than an individual organ.</p>
        </span>
      </div>
            
      <div>
        <img src={process.env.PUBLIC_URL+'/cover (8).png'} />
        <span>
          <h1>Gunas</h1>
          <p>Gunas Charaka, author of the Charaka Samhita, wrote that all material, both organic and inorganic, as well as thought and action, have ‘attributes’—qualities that contain potential energy, while the actions with which they are associated express kinetic energy. This is possibly the first reference to the concept of potential and kinetic energy. Vata, pitta and kapha each have their own attributes, and substances having similar attributes will tend to aggravate the related bodily humour.</p>
        </span>
      </div>
    </section>
    </>
    
  );
};

export default SearchContainer;
