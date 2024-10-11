import { createSelector } from "@reduxjs/toolkit";
import { AppRootState } from "../../lib/types/screen";

 const selectProductsPage = (state: AppRootState ) => state.productsPage;

 export const retrieveRestaurant = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.restaurant
 );

 export const retrieveChoosenProduct = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.choosenProduct
 );

 export const retrieveProducts = createSelector(
    selectProductsPage,
    (ProductsPage) => ProductsPage.products
 );