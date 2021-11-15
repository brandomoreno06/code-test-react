import React, { useState } from 'react'
import './LaunchItem.css';

 
const LaunchItem = ({
  name,
  date,
  image,
  video,
  article,
  details,
  success,
  upcoming,
}) => {

  const [view, setView] = useState(false);
  
  const statusClasses = upcoming ? 'launchitem__status upcoming' : (success ? 'launchitem__status success' : 'launchitem__status failed');

  return (
    
    <div className="launchitem">
      <div className="launchitem__header">
        <h2 className="launchitem__name">{name}</h2>
        <div className={statusClasses}>
          { upcoming ?  'upcoming' : (success ? 'success' : 'failed') }
        </div>
      </div>

      { view &&
        <>
          <div className="launchitem__options">
            <span className="launchitem__option">
              {new Date(date).toLocaleDateString()}
            </span>
            { article && 
              <a 
                className="launchitem__option"
                href={article}
                target="_blank"
                rel="noreferrer"
              >
                Article|
              </a> }
            { video &&
              <a
                className="launchitem__option"
                href={video}
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a> }
          </div>
          
          <div className="view__more">
            <div className="launchitem__image">
              { image ? <img src={image} alt={name}></img> : <span>No image</span> }
            </div>
            <div className="launchitem__details">
              {details ? details : 'No other details'}
            </div>
          </div>
        </>
      }

      <button onClick={() => setView(!view)}>
        {!view ? 'View' : 'Hide'}
      </button>
    </div>
  )
}
 
 
export default LaunchItem;
