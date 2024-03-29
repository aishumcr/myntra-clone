import { createSlice} from "@reduxjs/toolkit"


const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
      fetchDone: false, // value pending and done
      currentlyFetching: false,
    },
    //no need to put return statement here
    reducers: {
      markFetchDone: (state, action) => {
        state.fetchDone = true; // Modify the draft state directly
      },
      markFetchingStarted: (state, action) => {
        state.currentlyFetching = true; // Modify the draft state directly
      },
      markFetchingFinished: (state, action) => {
        state.currentlyFetching = false; // Modify the draft state directly
      },
    },
  });

export const fetchStatusActions=fetchStatusSlice.actions



export default fetchStatusSlice;


