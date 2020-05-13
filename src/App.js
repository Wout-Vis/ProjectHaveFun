import React, { useState, useRef, useEffect } from 'react';
import TestComponent from './TestComponent'

function App() {
  const [ data, setData ] = useState(['No Name'])
  const dataNameRef = useRef()

  
  const LOCAL_STORAGE_KEY = 'qs.data'

  useEffect( () => {
    const storedData = JSON.parse(localStorage.getItem( LOCAL_STORAGE_KEY ))
    if (storedData) setData( storedData )
  }, [])

  useEffect( ()=> {
    localStorage.setItem( LOCAL_STORAGE_KEY, JSON.stringify(data) )
  }, [data])

  function handleChangeName(e) {
    const name = dataNameRef.current.value
    if ( name === '') return
    setData( [name] )
    dataNameRef.current.value = null
  }

  return (
    <>
      <TestComponent passData={data} />
      <input ref={dataNameRef} type="text" defaultValue="Enter Name" />
      <button onClick={handleChangeName}>Submit Name</button>
    </>
  )
}

export default App;
