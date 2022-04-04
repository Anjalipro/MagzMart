import React, { useState ,useEffect} from "react";
import { BsSearch  } from 'react-icons/bs';
import './../styles/searchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  console.log(search);
 

  return (
    <div className="search-box">
      <form >
          
        <input
          className="search-txt"
          type="text"
          placeholder="Search your favourite magazine"
          value={search}
          onChange={(e) =>setSearch(e.target.value)}

        />
        <a className="search-btn" type="submit" ><i><BsSearch/></i></a>
        </form>

      
    </div>
  );
};

export default SearchBar;
