import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import RecordView from './Components/RecordView.js'
import UsrList from './Components/UsrList.js'

const App = () => {
  const exCardList = [{name:'ray', time: 123, type: "CARD"}, {name: 'Lucy', time: 789, type: "CARD"}, {name: 'Lucy', time: 999, type: "CARD"}];
  const exRewardList = [{name: 'Krishna', time: 111, type: "REWARD"}, {name: 'Krishan', time: 332, type: "REWARD"}]

  const [cardList, setCard] = useState([]);
  const [rewardList, setReward] = useState([]);
  const newEntryByType = (type) => {
    return (name) => {
      let entry = {
        name: name,
        time: Date.now(),
        type: type,
      }
      if(type === "CARD"){
        setCard([...cardList, entry])
      }else{
        setReward([...rewardList, entry])
      }
    }
  }
  const newEntryByName = (name) => {
    return (type) => {
      let entry = {
        name: name,
        time: Date.now(),
        type: type,
      }
      if(type === "CARD"){
        setCard([...cardList, entry])
      }else{
        setReward([...rewardList, entry])
      }
    }
  }
  const [viewState, toggleView] = useState(false)
  const newEntryView = () => {
    toggleView(!viewState)
  }
  return (
    <div>
      <h1>This is BR loyalty</h1>
      <RecordView view={viewState} cards={exCardList} rewards={exRewardList} addEntry={newEntryByType}/>
      <UsrList addEntry={newEntryByName}/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('app'));