// ====================================MY NOTES =================================================
// in this files we are creating slice which input value it is kinda usestate where we make new array store previous arrays value( using spread)
// also we use createSlice function to slice all the data, initialing them storing them to new array and exporting functions and reducer

// STEPS =+++++++++++++++++++++++++

// 1. IMPORT  create slice
// 2. create createSlice function with new const variables
// 3. this function has initialState, name and reducers( this has state and action, state consists of initialState value and action is where we make fuction like setting
//     or storing function )
// 4. destructure reducers and actions (actions has function which we will be using a other component so export them )
// 5. export reducer as well
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: [],
};
const display = createSlice({
  name: "form",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.form = [...state.form, action.payload];
    },
  },
});

const { reducer, actions } = display;

export const { setDisplay } = actions;
export default reducer;
