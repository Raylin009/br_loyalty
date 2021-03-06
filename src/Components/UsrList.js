import React, { useState, useEffect } from 'react';
const UsrList = ({addEntry}) => {
  const [usrs, addUsr] = useState([]);
  const [curName, editName] = useState('');
  const handleChange = (e) => {
    const str = e.target.value
    e.preventDefault()
    editName(str)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    curName.trim().length ? addUsr([...usrs, curName]): addUsr([...usrs]);
  }
  useEffect(() => {
    addEntry(curName)
    editName('')
  },[usrs])

  return (
    <div className="">
      <h3>UsrList</h3>
      {usrs.map((ele,index) => {
        return <div onClick={(e)=>{addEntry(ele)}} key={`${ele}${Date.now()}-${index}`}>{ele}</div>
      })}
      <form>
        <input type='text' value={curName} onChange={(e) => {handleChange(e)}}></input>
        <button onClick={(e)=>handleSubmit(e)}>Add</button>
      </form>
    </div>
  )
};

export default UsrList;