import React, {useEffect, useState} from 'react'
import './Navbar2.css'
import BellIcon from '../../assets/images/Bell.png'

function Navbar2(props) {
    const [searchItem, setSearchItem] = useState("")
    

    useEffect(()=>{
        props.setSearchItem(searchItem)
    },[props, searchItem])

  return (
    <div className='main-nav2-container'>
        <span>BIDIMA</span>
        <div className="group">
            <svg className="search-icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
            <input placeholder="Search" type="search" onChange={(e)=>setSearchItem(e.target.value)} className="input-search"/>
        </div>
        <div>
            <img src={BellIcon} alt='Bell Icon' />
            <span className='name-initials'>AC</span>
        </div>
    </div>
  )
}

export default Navbar2