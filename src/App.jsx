// import { useState } from 'react'
import { Bars } from './components/Bars'
import './scss/App.scss'

function App() {
  const dataList = [
    {
      id: 0,
      value: 10
    },
    {
      id: 1,
      value: 6
    },
    {
      id: 2,
      value: 8
    },
    {
      id: 3,
      value: 9
    },
    {
      id: 4,
      value: 12
    },
  ]
  

  return (
    <div className="bar-chart">
      {
        dataList.map(data => <Bars key={data.id} data={data} />)
      }
    </div>
  )
}

export default App
