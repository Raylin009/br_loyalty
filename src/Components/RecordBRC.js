import React from 'react';

const RecordBRC = ({cards}) => {
  return (
    <div>
      <h3>Record BRC:</h3>
      {cards.sort((a,b)=>(b.time-a.time)).map((ele)=>{
        return <h5>{ele.name}</h5>
      })}
      {console.log(cards.sort((a,b)=>(b.time-a.time)))}
    </div>
  )
};

export default RecordBRC