import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";

const selectWatchesPage = (state: AppRootState) => state.watchesPage;

export const retrieveOwner = createSelector(
   selectWatchesPage,
   (WatchesPage) => WatchesPage.owner
);

export const retrieveWatchDetail = createSelector(
   selectWatchesPage,
   (WatchesPage) => WatchesPage.watchDetail
);

export const retrieveWatches = createSelector(
   selectWatchesPage,
   (WatchesPage) => WatchesPage.watches
);