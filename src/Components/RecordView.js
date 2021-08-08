import React from 'react';
import RecordBRC from './RecordBRC';
import RecordBRR from './RecordBRR';

const RecordView = ({view, cards, rewards}) => {
  return (
    <div>
      <h2>Record View</h2>
      <RecordBRC type="CARD"/>
      <RecordBRC type="REWARD"/>
    </div>
  )
}

export default RecordView;