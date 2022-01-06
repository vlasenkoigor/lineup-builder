import {createSlice} from "@reduxjs/toolkit";

const lineupSlice = createSlice({
    name : 'lineup',
    initialState : {
        players : [
            {name : 'player 1', number : 1, position : null},
            {name : 'player 2', number : 2, position : null},
            {name : 'player 3', number : 3, position : null},
            {name : 'player 4', number : 4, position : null},
            {name : 'player 5', number : 5, position : null},
            {name : 'player 6', number : 6, position : null},
            {name : 'player 7', number : 7, position : null},
            {name : 'player 8', number : 8, position : null},
            {name : 'player 9', number : 9, position : null},
            {name : 'player 10', number : 10, position : null},
            {name : 'player 11', number : 11, position : null},
        ],
        formation :  '433'
    },

    reducers : {
        addPlayer : (state, action)=>{
            state.players.push({name : action.payload})
        },

        setFormation : (state, action)=>{
            state.formation = action.payload
        }
    }
})

export const selectPlayers = state => state.lineup.players;

export const selectFormation = state => state.lineup.formation;

const { addPlayer, setFormation } = lineupSlice.actions;


export { addPlayer, setFormation };

export default lineupSlice.reducer;
