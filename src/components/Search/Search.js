import React, { useState } from 'react'
import './Search.css';
 
 
const Search = (props) => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    const query = e.target.value
    setInput(query)
    props.onChange(query)
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={onChange}
      />
    </div>
  )
}
 
 
export default Search;
 