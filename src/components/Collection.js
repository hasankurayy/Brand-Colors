import React, { useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MainContext from '../contexts/MainContext'
import Brand from './Brand'
import Download from './Download'
import { GrLinkPrevious } from 'react-icons/gr'

function Collection() {

    const { slugs } = useParams()
    const navigate = useNavigate()
    const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext)

    const clearSelectedBrands = () => {
        setSelectedBrands([])
        navigate("/")
    }

    useEffect(() => {
        setSelectedBrands(slugs.split(","))
    }, [])

    return (
        <div className='content'>
            <header>

                <button className='back-btn' onClick={clearSelectedBrands}>
                    <GrLinkPrevious />
                    All Brands
                </button>

                {selectedBrands.length > 0 && <Download />}
            </header>

            <section className="brands">
                {selectedBrands.map(slug => {
                    let brand = brands.find(brand => brand.slug === slug)
                    return (
                        <Brand brand={brand} />
                    )
                })}
            </section>
        </div>
    )
}

export default Collection