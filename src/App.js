import "./styles.css";
import vid from "./pexels-nataliya-vaitkevich-7525913 (1080p).mp4";
import DiseaseAndMedication from "./DiseaseAndMedication";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import "./Search.css";
import Medicine from "./Medicine";
import SearchContainer from "./SearchContainer";
import SearchPre from "./SearchPre";
import { useEffect , useState} from "react";
import Footer from "./Footer";
import Encyclopedia from "./Encyclopedia";

function App() {


  

  return (
    <><div id="Search">
    {/* <SearchPre /> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<SearchContainer/>}/>
      <Route path="/disease/:name" element={<DiseaseAndMedication />} />
      <Route path="/medicine/:name" element={<Medicine/>} />
      <Route path="/encyclopedia" element={<Encyclopedia/>} />

    </Routes>
  </div>
          <Footer />

    </>
    
  );
}

export default App;
