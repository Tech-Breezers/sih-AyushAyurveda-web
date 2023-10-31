import { useEffect , useState } from "react";
import "./Medicine.css";
import "./styles.css";

import { useParams } from "react-router-dom";

const Medicine = () => {

  const params = useParams()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetch(`http://13.53.190.29:3001/api/search/med?q=${params.name}`).then((res) => {
      res.json().then((d) => {
        setData(d[0])
        setLoading(true)
      })
    })
  }, [])

  return (
    <>
    {
      loading && <>
      <section id="medicineContainer">
      <div id="medicine">
        <span id="medicineHeads">
          <h1>{data.medicine}</h1>
          {/* <h3>जानुवातः सन्धिवातश्च</h3> */}
        </span>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit per
          pellentesque, luctus sociosqu posuere lobortis penatibus velit erat
          varius laoreet ultrices, viverra augue ullamcorper tellus sagittis
          quisque vestibulum torquent. Class semper et senectus quam sed quis,
          vulputate pretium taciti pharetra varius euismod sollicitudin,
          natoque porttitor morbi leo porta. Praesent facilisi dignissim
          faucibus posuere nec sagittis aptent, per penatibus iaculis augue
          consequat odio, elementum felis risus pharetra ante vehicula.
        </p> */}
        {/* <span id="therapeuticIssues">
          <h3>Therapeutic Issues</h3>
          <span>
            <a href="#">Dengue</a>
            <a href="#">Fever</a>
          </span>
        </span> */}
      </div>
    </section>
    <span id="line"></span>
    <section id="aboutMedicine">
      <h1>About {data.medicine}</h1>
      <div id="aboutContainer">
        <span id="properties">
          <h3>Properties And Actions</h3>
          <p>
            {data.description}
          </p>
        </span>
        <span id="precautions">
          <h3>Precautions</h3>
          <span>
            {data.precautions.split(',').map((e) => {
              return <p>{e}</p>

            })}
          </span>
        </span>
        {/* <span id="dosages">
          <h3>Dosage</h3>
          <ul>
            <li>1 - 2</li>
          </ul>
        </span> */}
      </div>
    </section>
    <div id="medicineImages">
      <img src={process.env.PUBLIC_URL+`/images/${data.medicine}_${data.id}_1.jpg`} />
      <img src={process.env.PUBLIC_URL+`/images/${data.medicine}_${data.id}_2.jpg`} />

    </div>
      </>
      
    }
      
    </>
  );
};

export default Medicine;
