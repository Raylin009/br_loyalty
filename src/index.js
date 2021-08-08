import ReactDOM from 'react-dom';
import React from 'react';
import RecordView from './Components/RecordView.js'
import UsrList from './Components/UsrList.js'
const App = () => {
 return (
  <div>
    <h1>This is BR loyalty</h1>
    <RecordView />
    <UsrList />
  </div>
 )
 }
ReactDOM.render(<App />, document.getElementById('app'));