import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../lib/types/screen";

const initialState: HomePageState = {
    trendJewelry: [],
    popularWatch: [],
    topUsers: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setTrendJewelry: (state, action) => {
            state.trendJewelry = action.payload;
        },
        setPopularWatch: (state, action) => {
            state.popularWatch = action.payload;
        },
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

export const { setTrendJewelry, setPopularWatch, setTopUsers } = homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;