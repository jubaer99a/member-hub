import {createSlice, current} from '@reduxjs/toolkit';


const getData = JSON.parse(localStorage.getItem('Items'));

const init = {
    mdata: getData,
    upd: ''
}

const MemberSlice = createSlice({
    name: 'member',
    initialState: init,
    reducers: {
        addMem: (state, action) => {
            state.mdata.push(action.payload)
            localStorage.setItem('Items', JSON.stringify(current(state.mdata)))
        },
        delMem: (state, action) => {
            state.mdata = state.mdata.filter(mem => mem.id !== action.payload.id)
            localStorage.setItem('Items', JSON.stringify(state.mdata))
        },
        updclk: (state, action) => {
            state.upd = action.payload.id
        },
        goUp: (state, action) => {
            state.mdata = state.mdata.map(me => me.id === state.upd ? {...me, name: action.payload.name, age: action.payload.age} : me)
            localStorage.setItem('Items', JSON.stringify(state.mdata))
        }
    }
})

localStorage.setItem("Items", JSON.stringify(init.mdata))



export const {addMem, delMem, updclk, goUp} = MemberSlice.actions;
export default MemberSlice.reducer;