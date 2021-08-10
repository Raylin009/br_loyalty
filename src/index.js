import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import RecordView from './Components/RecordView.js'
import './app.css'
const App = () => {
  const [cardList, setCard] = useState([]);
  const [rewardList, setReward] = useState([]);
  return (
    <div className="loyalty-app">
      <h1>BR loyalty</h1>
      <RecordView />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));