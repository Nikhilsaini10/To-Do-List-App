import React from 'react'

const List = ({value,indexNumber,toDoList, setToDoList}) => {

  let deleteRow = () => {
    let finalData = toDoList.filter((v,i) => i!=indexNumber)
    setToDoList(finalData);
  }
  return (
    <div>
      <li className='bg-gray-900 border-2 border-gray-400 p-2 my-2 text-l font-semibold relative rounded'>{value} <span className='absolute cursor-pointer right-6 top-0 text-2xl active:scale-115' onClick={deleteRow}>&times;</span></li>
      
    </div>
  )
}

export default List
