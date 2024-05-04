import React from 'react'
import Sidebar from '../../components/Dashboard/Dashboard_sidebar'
import Dashboardrecenterrands from '../../components/Dashboardrecenterrands/Dashboardrecenterrands'
import "./Recenterrands.css"

const Recenterrands = () => {
  return (
    <div className='recent-errands'> 
        <Sidebar/>
        <Dashboardrecenterrands/>
    </div>
  )
}

export default Recenterrands