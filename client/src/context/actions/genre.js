import axios from 'axios';

export const genreActions = function(dispatch) {
    const getGenre = async function() {
        try {
            const res = await axios.get("http://localhost:5000/api/genres");
            dispatch({
                type: "GET_GENRE",
                payload: res.data.data
            })
        } catch (err) {
            console.log(err.message)
        }
        
    };
    
    const addGenre = async function(genre) {
        const res = await axios.post("http://localhost:5000/api/genres",genre);
        
        dispatch({
            type: 'ADD_GENRE',
            payload: res.data.data
        })
    }
    
    const deleteGenre = async function(id) {
        const res = await axios.delete("http://localhost:5000/api/genres/"+id);
        dispatch({
            type: 'DELETE_GENRE',
            payload: res.data.data
        })
    }

    return [getGenre, addGenre, deleteGenre];
}


