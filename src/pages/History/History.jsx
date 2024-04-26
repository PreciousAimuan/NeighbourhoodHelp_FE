import React from 'react'
import Sidebar from '../../components/Dashboard/Dashboard_sidebar'
import HistoryTable from '../../components/Service/Service'
import "./History.css"

const History = () => {
  return (
    <div className='errand-history'>
    <Sidebar/>
    <HistoryTable/>
    </div>
  )
}

export default History