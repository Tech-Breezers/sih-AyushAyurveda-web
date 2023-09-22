import React from 'react'
import './SearchBar.css'
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function SearchBar() {
    const [dropdownData, setDropDownData] = useState([]);
    const [search, setSearch] = useState("");
    
    const checkChange = () => {
      if(search) {
        fetch(`http://16.16.201.187:3001/api/suggest?q=${search}`).then((res) => {
          res.json().then(data => {
            setDropDownData(data)
            console.log(data);
          })
        })
      }
      
    }
  
    
  
    const makeFocus = () => {
      document.querySelector('#dropdown').style.display = 'none'
      setDropDownData([])
    }
  
    const makeBlur = () => {
      document.querySelector('#dropdown').style.display = 'flex'
      document.querySelector('#dropdown').focus()
    }
  
    useEffect(() => {
      checkChange()
    }, [search])
  return (
    <div id="searchBox">
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
              <Link reloadDocument className='listDiseases' to={`disease/${e.id}`}>
                <p className='diseaseName'>{e.disease}</p>
                <span>
                  {e.symp.map((e) => <p>{e}</p>)}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
  )
}

export default SearchBar