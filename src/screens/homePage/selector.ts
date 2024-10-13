import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";
import { create } from "@mui/material/styles/createTransitions";
import HomePage from ".";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTrendJewelry = createSelector(
   selectHomePage,
   (HomePage) => HomePage.trendJewelry
);

export const retrievePopularWatch = createSelector(
   selectHomePage,
   (HomePage) => HomePage.popularWatch
);

export const retrieveTopUsers = createSelector(
   selectHomePage,
   (HomePage) => HomePage.topUsers
);