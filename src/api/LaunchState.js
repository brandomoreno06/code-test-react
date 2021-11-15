import React, { createContext, useContext, useReducer} from 'react';


const LaunchContext = createContext();

export const LaunchProvider = ({initialState, reducer, children}) => {
    const launchProviderValue = useReducer(reducer, initialState);
    
    return(
        <LaunchContext.Provider value={launchProviderValue} >
            {children}
        </LaunchContext.Provider>
    )
}

export const useStateValue = () => useContext(LaunchContext);