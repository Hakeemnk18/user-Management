import { createSlice } from "@reduxjs/toolkit";


const adminSlice = createSlice({
    name:'admin',
    initialState:{
        user:null
    },
    reducers:{
        addAdmin:(state, action)=>{
            state.user = action.payload
        },

        removeAdmin:(state, action) => {
            state.user = null;
        }
    }
})

export const {addAdmin, removeAdmin} = adminSlice.actions
export default adminSlice.reducer