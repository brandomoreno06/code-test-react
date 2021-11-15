import axios from "axios";

const fetchLaunches = (dispatch) => {
  
  axios
    .get("https://api.spacexdata.com/v3/launches")
    .then((response) => { 
      dispatch({
        type: 'GET_LAUNCHES',
        loading: false,
        launchList: response.data,
      })
    })
    .catch((error) => { console.log(error) })
    //Add error handling
}

export default fetchLaunches;