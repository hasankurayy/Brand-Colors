import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../contexts/MainContext'
import { GrLink, GrDownload, GrClose} from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Download() {

    const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext)
    const [downloadUrl, setDownloadUrl] = useState()
    const [cssMethod, setCssMethod] = useState("css")

    // download
    useEffect(() => {
        if (selectedBrands.length > 0) {

            let output = ""
            // dosya içeriklerini uzantıya göre değiştirdik.
            switch (cssMethod) {

                case "css":
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `--${slug}-${key}: #${color};\n`
                        })
                    })
                    break

                case "scss":
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key}: #${color};\n`
                        })
                    })
                    break

                case "less":
                    selectedBrands.map(slug => {
                        let brand = brands.find(brand => brand.slug === slug)
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key}: #${color};\n`
                        })
                    })
                    break
            }

            const blob = new Blob([output])
            setDownloadUrl(URL.createObjectURL(blob))
            return (() => {
                URL.revokeObjectURL(downloadUrl)
                setDownloadUrl("")
            })
        }
    }, [selectedBrands, cssMethod])

    return (
        <div className='download'>
            <div className="actions">

                <select onChange={(e) => setCssMethod(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>

                <a href={downloadUrl} download={`brandColors.${cssMethod}`}>
                    <GrDownload />
                </a>

                <Link to={`/collection/${selectedBrands.join(",")}`}>
                    <GrLink />
                </Link>

            </div>
            <div className="selected">
                <button onClick={() => setSelectedBrands([])}><GrClose /></button>
                {selectedBrands.length} brands collected
            </div>
        </div>
    )
}

export default Download