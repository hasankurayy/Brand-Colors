import React, { useContext } from 'react'

import { GrSearch } from "react-icons/gr"
import MainContext from '../contexts/MainContext'

function Search() {

  const {setSearch} = useContext(MainContext)

  return (
    <div className='search'>
      <div className="icon">
        <div className="icon-center">
          <GrSearch />
        </div>
      </div>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder='Search Brands' />
    </div>
  )
}

export default Search