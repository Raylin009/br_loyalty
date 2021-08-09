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
    <div className="recordlist-container">
      <h3 className="recordList-title">{type}:</h3>
      <div className="recordlist">
        {
          entries.length ?
            entries
              .sort((a,b)=>(a.time-b.time))
              .map((ele,i)=>{ 
                return <h5 key={Date.now()+i}>{ele.name}</h5>
              })
            : <h5>who's gonna be the first</h5>
        }
      </div>
      <UsrList className='usr-list' addEntry={handleEntries}/>
    </div>
  )
};

export default RecordBRC