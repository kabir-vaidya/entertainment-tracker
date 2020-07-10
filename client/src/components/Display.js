import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";

function Display(props) { 
    
    const { deleteLink } = useContext(GlobalContext);
    
    return (
        <div className="info">
            <p>SOURCE: {props.link.source}</p>
            <p>URL: {props.link.url}</p>
            <p>TYPE: {props.link.type}</p>
            <button onClick={()=>deleteLink(props.gid, props.link._id)}>
                Delete
            </button>
        </div>
    )
}

export default Display;