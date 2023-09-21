import React, { useEffect, useState } from 'react'
import './Encyclopedia.css'
import { Link } from 'react-router-dom'

function Encyclopedia() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetch('http://16.16.201.187:3001/api/treat').then((response) => {
      response.json().then((data) => {
        setData(data);
        setLoading(true);
      })
    })
  }, [])

  return (
    <div id="encyclopedia">
        <h1>Encyclopedia</h1>
        <p>
        Ayurveda, also called Ayurvedic medicine, traditional system of Indian medicine. Ayurvedic medicine is an example of a well-organized system of traditional health care, both preventive and curative, that is widely practiced in parts of Asia. Ayurveda has a long tradition behind it, having originated in India perhaps as much as 3,000 years ago. Today it remains a favoured form of health care in large parts of the Eastern world, especially in India, where a large percentage of the population uses this system exclusively or combined with modern medicine.
        </p>
        <div id="list">
          <p id='tableHead'>
            <h3>Disease</h3>
            <h3>Symptoms</h3>
          </p>
          {loading && data.map((e) => {
            return <Link to={`/disease/${e.id}`} className='row'>
            <p>            {e.disease}
</p>
<p>{e.symp.map((e) => e+', ')}</p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default Encyclopedia