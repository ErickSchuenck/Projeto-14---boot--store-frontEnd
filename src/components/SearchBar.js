
import React, { useContext } from 'react';
import UserContext from "../contexts/userContext";
import styled from 'styled-components';
import { useState } from 'react';


export default function SearchBar() {

  const { products, setProducts, productsInitialList } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState('')

  function filterProducts() {
    setProducts(products.filter((val) => {
      if (searchTerm === '') {
        return val
      } else {
        return val.name.toLowerCase().includes(searchTerm.toLowerCase())
      }
    }))
  }

  function resetFilterProducts() {
    setProducts([...productsInitialList])
  }

  return (
    <Search>
      <div className='search-input'>
        <input
          type={'text'}
          placeholder={'nome do produto'}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ion-icon name="search-outline"
        onClick={filterProducts}
      />
      <ion-icon name="reload-outline"
        onClick={resetFilterProducts}
      />
    </Search>
  )
}

const Search = styled.div`
  width: 220px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  background-color: var(--fundo);
  animation: showSearchbar .6s ease;
  position: absolute;
  top: 55px;
  left: 10px;
  z-index: 9;

  ion-icon{
    font-size: 20px;
    cursor: pointer;
  }
  .search-input{
    width: 150px;
    background-color: white;
    height: 25px;
    border-radius: 3px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
    
  }
  .search-input input{
    border: none;
    outline: 0;
    width: 100%;
    padding: 5px;
    font-family: var(--primaryFont)
  }
  @keyframes showSearchbar{
    from{
      opacity: 0;
      height:0;
    }
    to {
      opacity: 1;
      height: 40px;
    }
  }
`