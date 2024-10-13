import { createSlice } from "@reduxjs/toolkit";
import { WatchPageState } from "../../lib/types/screen";


const initialState: WatchPageState = {
    owner: null,
    watchDetail: null,
    watches: [],
};

const watchPageSlice = createSlice({
    name: "watchesPage",
    initialState,
    reducers: {
        setOwner: (state, action) => {
            state.owner = action.payload;
        },
        setWatchDetail: (state, action) => {
            state.watchDetail = action.payload;
        },
        setWatches: (state, action) => {
            state.watches = action.payload;
        },
    },
});

export const { setOwner, setWatchDetail, setWatches } = watchPageSlice.actions;

const WatchPageReducer = watchPageSlice.reducer;
export default WatchPageReducer;