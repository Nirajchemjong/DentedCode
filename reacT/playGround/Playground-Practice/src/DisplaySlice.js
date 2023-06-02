import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resultFname: [],
  resultLname: [],
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  //   initialState: {
  //     resultFname: [],
  //   },
  reducers: {
    setDiplayFname: (state, action) => {
      // update the state
      state.resultFname = [...state.resultFname, action.payload];
    },
    setDisplayLname: (state, action) => {
      state.resultLname = [...state.resultLname, action.payload];
    },
  },
});

const { reducer, actions } = dataSlice;

export const { setDiplayFname, setDisplayLname } = actions;
// export const { resultFname, resultLname } = reducer;
// console.log(dataSlice, dataSlice.reducer, dataSlice.actions);
export default reducer;
