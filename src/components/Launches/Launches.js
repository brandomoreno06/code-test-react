import React, { useState, useEffect } from 'react'
import './Launches.css';
import Search from '../Search/Search';
import Loading from '../UI/Loading';
import LaunchList from '../Launchlist/LaunchList';
import fetchLaunches from '../../api/fetchLaunches';
import { useStateValue } from '../../api/LaunchState';


const Launches = () => {
  const [{ loading, launchList }, dispatch] = useStateValue();
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchLaunches(dispatch);
  }, [])

  const queryHandler = (value) => {
    setQuery(value)
  }

  return (
    <div className="launches">
      <Search onChange={queryHandler} />

      { loading ?
        <Loading /> :
        <LaunchList list={launchList} searchQuery={query}/>
      }
    </div>
  )
}
 
 
export default Launches;
 