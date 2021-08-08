import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import RecordView from './Components/RecordView.js'

const App = () => {
  const exCardList = [{name:'ray', time: 123, type: "CARD"}, {name: 'Lucy', time: 789, type: "CARD"}, {name: 'Lucy', time: 999, type: "CARD"}];
  const exRewardList = [{name: 'Krishna', time: 111, type: "REWARD"}, {name: 'Krishan', time: 332, type: "REWARD"}]

  const [cardList, setCard] = useState([]);
  const [rewardList, setReward] = useState([]);
  return (
    <div>
      <h1>This is BR loyalty</h1>
      <RecordView cards={exCardList} rewards={exRewardList}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));