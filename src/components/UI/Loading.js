import React from 'react'
import './Loading.css';
 
 
const Loading = (props) => {
  return (
    <div className="loading" style={{ color: props.color }}>
      <div className="loading__part" />
      <div className="loading__part" />
      <div className="loading__part" />
    </div>
  )
}
 
 
export default Loading;
 