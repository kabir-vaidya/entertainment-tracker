import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../context/GlobalState';
import Genre from "./Genre";
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const {genre, getGenre} = useContext(GlobalContext);

    useEffect(()=>{
        getGenre();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // console.log(genre);

    return (
        // <div className="w3-sidebar w3-bar-block">
        //     <Link className="w3-bar-item w3-blue w3-button w3-border-bottom" to="/">Home</Link>
            
        // </div>
        <div >
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Entertainment Tracker</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <Link className="homeButton" to="/">Home</Link>
                    </li>
                    {genre.map((genre, index) => 
                        <li key={genre._id}>
                            <Link className="genres" key={genre._id} to={`/genre/${genre._id}`}>
                                <Genre genre={genre} key={genre._id} />
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>

        </div>
    )
}
