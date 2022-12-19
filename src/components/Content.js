import React, { useContext } from 'react'
import Search from './Search'
import Brand from "./Brand"
import MainContext from '../contexts/MainContext'
import Download from './Download'

function Content() {

  const {brands, selectedBrands} = useContext(MainContext)

  return (
    <div className='content'>
      <header>
        <Search />
        {selectedBrands.length>0 && <Download />}
      </header>

      <section className="brands">
        {brands.map(brand => (
          <Brand brand={brand} />
        ))}
      </section>
    </div>
  )
}

export default Content