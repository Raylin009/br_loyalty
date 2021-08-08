import React from 'react';
import RecordBRC from './RecordBRC';
import RecordBRR from './RecordBRR';

const RecordView = ({view, cards, rewards}) => {
  return (
    <div>
      <h2>Record View</h2>
      <RecordBRC cards={cards}/>
      <RecordBRR rewards={rewards}/>
    </div>
  )
}

export default RecordView;