import React from 'react'
import LaunchItem from '../LaunchItem/LaunchItem';
import './LaunchList.css';
 

const LaunchList = ({ list, searchQuery }) => {
  const result = list
  .filter((item) => {
    if (searchQuery.trim() === "") {
      return item;
    }
    return item.mission_name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  })

  return (
   
    <div className="launchlist">
      { result.length === 0 ? <div>No search result.</div> :
        result.map((item, index) => (
              <LaunchItem
                key={index}
                name={item.mission_name}
                date={item.launch_date_local}
                image={item.links.mission_patch_small}
                video={item.links.video_link}
                article={item.links.article_link}
                details={item.details}
                success={item.launch_success}
                upcoming={item.upcoming}
              />
        ))
      }
    </div>
  )
}
 
 
export default LaunchList;
 