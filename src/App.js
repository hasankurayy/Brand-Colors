import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import BrandsData from "./brands.json"
import MainContext from './contexts/MainContext';
import Copied from './components/Copied';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Collection from './components/Collection';

function App() {

  // sozluk halinde olan brands'i array'e çevirdik.
  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    return brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied,setCopied] = useState(false)
  const [search,setSearch] = useState("")

  useEffect(() => {
    if(copied){
      setTimeout(() => {
        setCopied(false)
      },500)
    }
  }, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search)))
  }, [search])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='collection/:slugs' element={<Collection />} />
          </Routes>
        </BrowserRouter>

        {copied && <Copied color={copied} />}
      </MainContext.Provider>
    </>
  );
}

export default App;
