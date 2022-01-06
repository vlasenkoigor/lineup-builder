import React, {useState} from 'react';
import {
    selectPlayers,
    selectFormation,
    setFormation,
    addPlayer
} from '../slices/lineupSlice'

import {selectFormations} from '../slices/formationsSlice';

import {useSelector, useDispatch} from "react-redux";

function LineupSettings() {
    const dispatch = useDispatch();
    const players  = useSelector(selectPlayers);
    const formation = useSelector(selectFormation);
    const formations = useSelector(selectFormations);

    console.log(formation)
    const [playerName, setPlayerName] = useState('');

    return (
        <div>
            <input value={playerName} onChange={e => setPlayerName(e.target.value)}/>
            <button onClick={()=>{dispatch(addPlayer(playerName))}}>add player</button>
            <br/>
            <select value={formation} onChange={(e)=>{dispatch(setFormation(e.target.value))}}>
                {formations.map( (value, i) => <option key={i} value={value}>{value}</option>)}
            </select>
            <ul>
                {players.map(({name}, i)=><li key={i} >{name}</li>)}
            </ul>
        </div>
    );
}

export default LineupSettings;
