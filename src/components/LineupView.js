import React, {useEffect, useRef, useState} from 'react';
import {PIXILineup} from "./pixi/PIXILineup";

const LineupView = () => {
    const view = useRef(null);

    const [lineup, setLineup] = useState(new Array(11).fill('').map((_, i)=>{

        return  {
            id : i+1,
            name : `player_${i+1}`,
            pos : [Math.random() * 100, Math.random() * 100]
        }

    }))


    const onLineupChange = (data)=>{

    }

    useEffect(()=>{
        new PIXILineup(view.current, {lineup, onLineupChange})
    }, [])

    return (
        <canvas ref={view}/>
    );
};

export default LineupView;
