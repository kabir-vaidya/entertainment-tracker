import axios from 'axios';


export const linkActions = (dispatch) => {
    const uri = "http://localhost:5000/api/genres";

    const getLinks = async function(id){
        try {
            const res = await axios.get(`${uri}/${id}/links`);
            dispatch({
                type: "GET_LINKS",
                payload: res.data.data.links
            })            
        } catch (err) {
            console.log(err);
        }
    }

    const addLink = async function(id, link){
        try {
            const res = await axios.post(`${uri}/${id}/links`, link);
            dispatch({
                type: "ADD_LINK",
                payload: res.data.data
            })
        } catch (err) {
            console.log(err.message);            
        }
    }

    const deleteLink =  async function(gid, id){
         try{
            const res = await axios.delete(`http://localhost:5000/api/genres/${gid}/links/${id}`);
            dispatch({
                type: 'DELETE_LINK',
                payload:res.data.data
            })
        } catch(err){
            console.log(err.message);
        } 
    }

    return [getLinks, addLink, deleteLink];
}