import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "item",
    initialState: [],
    reducers: {
        addItem(state, action) {
            // const itemIndex = state.findIndex(item => item.id === action.payload.id);
            // if (itemIndex !== -1) {
            //     state[itemIndex].qnty += 1;
            // } else {
            //     const newItem = { ...action.payload, qnty: 1 };
            //     state.push(newItem);
            // }

            const itemIndex = state.findIndex(item=>item.id === action.payload.id);
            if(itemIndex!==-1){
                state[itemIndex].qnty+=1;
            }else{
                const newItem = {...action.payload, qnty: 1};
                state.push(newItem); 
            }
        },
        removeItem(state, action) {
            const itemIndex = state.findIndex(item=>item.id === action.payload);
             
            if(state[itemIndex].qnty > 1){
                state[itemIndex].qnty = state[itemIndex].qnty - 1 ; 
            }else{

                return state.filter((item) => item.id !== action.payload);
            }
        },
    },
});

export default cartSlice.reducer;
export const { addItem, removeItem } = cartSlice.actions;
