import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../context/GlobalState";

function Form(props) {

    const context = useContext(GlobalContext);
    const [source, setSource] = useState("");
    const [url, setUrl] = useState("");
    const [type, setType] = useState("");
    const [genre, setGenre] = useState("");
    const [newGenre, setNewGenre] = useState(false);

    useEffect(() => {
        context.getGenre();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function changeGenre(e){
        if(e.target.value === ""){
            setNewGenre(true);
        } else {
            setNewGenre(false);
        }
        setGenre(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        var data = {
            source: source,
            url: url,
            type: type
        }
        const genreName = genre;
        if(!newGenre){
            const existingGenre = context.genre.find(genre => genre.name === genreName);
            context.addLink(existingGenre._id, data);
        } else {
            console.log({name: genreName, links: [data]});
            context.addGenre({name: genreName, links: [data]});
        }
        setSource("");
        setUrl("");
        setType("")
        setGenre("")
        props.handleForm(data);
    }

    return (
        <>
            <form onSubmit = {onSubmit}>
                Genre:
                <select defaultValue="Select Genre" className="w3-select" name="genre" 
                    onChange={changeGenre}>
                    <option key="0" disabled hidden>Select Genre</option>
                    <option key="1" value="">-- Add a new genre --</option>
                    {context.genre.map((genre, index) => <option key={index} value={genre.name}>{genre.name}</option> )}
                </select>
                { newGenre? <input value={genre} onChange={(e) => setGenre(e.target.value)}/>:<></> }
                Source: <input value={source} onChange={(e) => setSource(e.target.value)}/> <br/>
                URL: <input value={url} onChange={(e) => setUrl(e.target.value)} /> <br/>
                Type:  
                Text<input value='text' type='radio'
                    checked={type === 'text'} 
                    onChange={(e) => setType(e.target.value)} />
                Video<input name='video' value='video' type='radio' 
                    checked={type === 'video'} 
                    onChange={(e) => setType(e.target.value)} />
                Image<input name='image' value="image" type='radio'
                    checked={type === 'image'} 
                    onChange={(e) => setType(e.target.value)}/> <br/>
                <button>Submit</button>
            </form>
        </>
    )
} 

export default Form;