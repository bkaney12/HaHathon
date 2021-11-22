import React from 'react';
import { useProducts } from '../../contexts/ItemsContext';
import MyLink from '../../shared/MyLink';
import './Search.css'

const Search = () => {
   const { searchResults } = useProducts();

   return (
      <div className="search">
         {
            searchResults.length && searchResults.map(item => (
               <MyLink to={`/product/${item.id}`}>
                  <p>{item.title}</p>
               </MyLink>
            ))
         }
      </div>
   )
}

export default Search
