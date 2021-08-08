import React from 'react';
import RecordBRC from './RecordBRC';
import RecordBRR from './RecordBRR';

const RecordView = () => {
  return (
    <div>
      <h2>Record View</h2>
      <RecordBRC />
      <RecordBRR />
    </div>
  )
}

export default RecordView;