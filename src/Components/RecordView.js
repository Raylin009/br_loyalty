import React from 'react';
import RecordBRC from './RecordList';
import './recordView.css';

const RecordView = () => {
  return (
    <div className="recordview">
      <RecordBRC type="CARD"/>
      <RecordBRC type="REWARD"/>
    </div>
  )
}
export default RecordView;