import { useEffect, useState } from "react";
import "./DiseaseAndMedication.css";
import "./styles.css";
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const DiseaseAndMedication = () => {

  const params = useParams()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch(`http://16.16.201.187:3001/api/treat/${params.name}`).then((res) => {
      res.json().then(d => {
        if(d.length) {
          setData(d[0])
          setLoading(true)
        }
        
      })
    })
    
  }, [])
  

  return (
    <>
    {
      loading && <>
        <section id="diseaseContainer">
        <div id="disease">
          <span id="diseaseHeads">
            <h1>{data.disease}</h1>
            <h3>{data.alternate_name}</h3>
          </span>
          <p>
            {data.treatment}
          </p>
          <span id="symptoms">
            <h3>Symptoms</h3>
            <span>
              {
                data.symptoms.split(',').map((e) => <p>{e}</p>)
              }

            </span>
          </span>
        </div>
      </section>
      <span id="line"></span>
      <section id="medicationContainer">
        <h1>Treatment</h1>
        <span id="ingredients">
          <h3>Ingredients</h3>
          <span>
            {
              data.herbs.map(e => <Link to={`/medicine/${e}`} relative="path">{e}</Link>)
            }
          </span>
        </span>

        {/* <span id="steps">
          <h3>Steps to Prepare</h3>
          <div>
            <span>Step1</span>
            <span>Step1</span>
          </div>
        </span> */}
      </section>
      </>
    }
      
    </>
  );
};

export default DiseaseAndMedication;
