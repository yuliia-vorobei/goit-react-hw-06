// import { createAction } from "@reduxjs/toolkit";

// export const changeFilter = createAction("filters/changeFilter");
// const initialState = {
//   filters: {
//     name: "",
//   },
// };

// export default function filterReducer(state = initialState.filters, action) {
//   switch (action.type) {
//     case "filters/changeFilter":
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// }

// src/redux/filtersSlice.js

import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;
export default slice.reducer;
