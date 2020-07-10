import React, {useContext, useEffect, useState} from 'react'
import Display from '../components/Display';
import { GlobalContext } from '../context/GlobalState';
import {Tabs, Tab} from 'react-bootstrap';


export default function Links(props) {
    const {links, getLinks} = useContext(GlobalContext);
    const [content, setContent] = useState(links)

    useEffect(()=>{
        getLinks(props.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const selectTab = (k) => {
        if(k !== 'all'){
            setContent(links.filter(link => link.type === k))
        }
        else {
            setContent(links)
        }
    }

    return (
        <div>
        
            <Tabs className="tabs" defaultActiveKey='text' id="uncontrolled-tab-example" onSelect={selectTab}>
            <Tab eventKey="all" title="All">
              {content.map(link => <Display key={link._id} link={link} gid={props.match.params.id} />)}
            </Tab>
            <Tab eventKey="text" title="Text">
                {content.map(link => <Display key={link._id} link={link} gid={props.match.params.id} />)}
            </Tab>
            <Tab eventKey="video" title="Video">
                {content.map(link => <Display key={link._id} link={link} gid={props.match.params.id} />)}
            </Tab>
            <Tab eventKey="image" title="Image">
                {content.map(link => <Display key={link._id} link={link} gid={props.match.params.id} />)}
            </Tab>
            </Tabs>
        </div>
    )
}
