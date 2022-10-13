import Graph from 'graphology';
import Sigma from 'sigma';
import graphdata from '../assets/data.json'
import { useEffect, useState, useRef} from 'react';


const Network = () => {
    const myDiv = useRef(null);
    let hoveredEdge = null;
    useEffect(()=>{
        const mygraph = new Graph({multi: true});
        mygraph.import(graphdata) 
        console.log(mygraph.size);
        const settingsSigma = {
            labelRenderedSizeThreshold: 1,
            "multi": true,
            enableEdgeClickEvents: true,
            enableEdgeHoverEvents: true,
            edgeReducer(edge, data) {
                
                const res = { ...data };
                if (edge === hoveredEdge) res.color = "#cc0000";
                return res;
                },
        }
        
        const renderer = new Sigma(mygraph,myDiv.current,settingsSigma);
        return () => {
            renderer.kill()
            
        }
    },[myDiv.current])
    return(
        <>
        <div ref={myDiv} style={{"height" : "100vh", "width" : "50%"}}></div>
        
        </>
    )
}

export default Network;