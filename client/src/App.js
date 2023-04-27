import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch('/cadastrar/debug')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    < div > App</div >
  )
}

export default App