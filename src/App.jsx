import React, { useState } from 'react'
import List from './component/List'

const App = () => {

  let [toDoList,setToDoList] = useState([])

  let saveToDoList = (e) => {
    let todoname = e.target.todoname.value 
    if(!toDoList.includes(todoname)){
        let finalToDoList = [...toDoList,todoname]
        setToDoList(finalToDoList)
    }else{
      alert("To Do Name are Already Exits....!!")
    }

    
    e.preventDefault()
    e.target.todoname.value = "";
  }

  let list = toDoList.map((value,index) => {
    return(
      <div>
        <List value={value} key={index} indexNumber={index} toDoList={toDoList} setToDoList={setToDoList}/>
      </div>
       
    )
  })

  return (
    <div className='bg-black w-full h-screen'>
      <div className='bg-black h-auto pb-10 text-white flex flex-col items-center pt-20 gap-5'>
      <h2 className='text-3xl  font-bold '>To Do List</h2>
     <div className='bg-gray-600 rounded w-[90%] md:w-[70%] lg:w-[60%] p-5'>
     <form  
      className='flex gap-6 mb-5'
      onSubmit={saveToDoList}>

        <input 
        type="text" 
        placeholder='Enter Details...' 
        name='todoname'
        className='bg-white text-black px-4 py-2 rounded font-semibold outline-none w-full' / >

        <button className='bg-gray-500 px-4 py-2 rounded font-semibold active:scale-95'>Save</button>
      </form>
      <ul>       
      {list}
      </ul>
     </div>
    </div>
    </div>
  )
}

export default App
