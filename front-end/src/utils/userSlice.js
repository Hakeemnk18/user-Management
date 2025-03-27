import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null
    },
    reducers:{
        addUser:(state, action)=>{
            state.user = action.payload
        },

        removeUser:(state, action) => {
            state.user = { name: '', _id: '', role: '' };
        }
    }
})

export const {addUser, removeUser} = userSlice.actions
export default userSlice.reducer