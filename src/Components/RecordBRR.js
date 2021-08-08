import React, {useState} from 'react';

const RecordBRR = ({rewards}) => {
  return (
    <div>
      <h3>Record BRRewards:</h3>
      {rewards.sort((a,b)=>(b.time-a.time)).map(
        (ele)=>{
          return(
            <h5>{ele.name}</h5>
          )
        }
      )}
    </div>
  )
};

export default RecordBRR;