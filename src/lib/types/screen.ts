import { Jewelry } from "./jewelry";
import { Member } from "./member";
import { Order } from "./order";
import { Watch } from "./watch";

/** React APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    jewelriesPage: JewelryPageState;
    watchesPage: WatchPageState;
    ordersPage: OrdersPageState;
};

/** HOMEPAGE*/
export interface HomePageState {
    trendJewelry: Jewelry[];
    popularWatch: Watch[];
    topUsers: Member[];
};

/* Jewelry PAGE */
export interface JewelryPageState {
    owner: Member | null;
    jewelryDetail: Jewelry | null;
    jewelries: Jewelry[];
};

/* Watch PAGE */
export interface WatchPageState {
    owner: Member | null;
    watchDetail: Watch | null;
    watches: Watch[];
};


/* ORDERS PAGE*/
export interface OrdersPageState {
    pausedOrders: Order[];
    processOrders: Order[];
    finishedOrders: Order[];
};