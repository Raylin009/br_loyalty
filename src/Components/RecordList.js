import React, { useState } from 'react';
import UsrList from './UsrList';
import './recordList.css';

const RecordBRC = ({type}) => {
  const [entries, addEntries] = useState([]);
  const handleEntries = (name) => {
    let entry = {
      name,
      time: Date.now(),
      type,
    }
    addEntries([...entries, entry])
  }
  return (
    <div>
      <h3>{type}:</h3>
      {
        entries.length ?
          entries
            .sort((a,b)=>(b.time-a.time))
            .map((ele,i)=>{ 
              return <h5 key={Date.now()+i}>{ele.name}</h5>
            })
          : <h5>who's gonna be the first</h5>
      }
      <UsrList addEntry={handleEntries}/>
    </div>
  )
};

export default RecordBRC