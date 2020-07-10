import React, {useState} from "react";
import Form from "../components/Form";

function Home(){

    const [link, setLink] = useState([])
    // link.map(l => console.log(l.source));


    return (
        <>
            <h1>This is entertainment tracker</h1>
            <Form handleForm={data => setLink([...link, data])}/>
        </>
    )
}

export default Home;