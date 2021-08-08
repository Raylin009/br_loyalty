import React from 'react';
import RecordBRC from './RecordList';
import './recordView.css';

const RecordView = () => {
  return (
    <div>
      <h2>Record View</h2>
      <RecordBRC type="CARD"/>
      <RecordBRC type="REWARD"/>
    </div>
  )
}
export default RecordView;