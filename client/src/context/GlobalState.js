import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import {genreActions} from './actions/genre';
import { linkActions } from './actions/link';
// import { miscActions } from './actions/misc';
// import 

const initialState = {
    genre: [],
    links: [],
    loading: true
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [getGenre, addGenre, deleteGenre] = genreActions(dispatch);
    const [getLinks, addLink, deleteLink] = linkActions(dispatch);
    // const [purge] = miscActions(dispatch);

    return(
        <GlobalContext.Provider value={{
            genre: state.genre,
            loading: state.loading,
            links: state.links,
            // purge,
            getLinks, 
            addLink,
            deleteLink,
            getGenre, 
            addGenre, 
            deleteGenre
        }}>
            {children}
        </GlobalContext.Provider>
    )
}  