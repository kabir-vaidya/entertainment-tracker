import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export default function Genre(props) {
    const {deleteGenre} = useContext(GlobalContext);
    return (
        <>
            {props.genre.name} 
            {/* <div className="delSquare"> */}
            {/* <p
             className='delButton' onClick={()=>deleteGenre(props.genre._id)}>
                    X
                </p>  */}
            {/* </div> */}
        </>
    )
}
