import { Member } from "./member";
import { Order } from "./order";
import { Product } from "./product";

/** React APP STATE */
export interface AppRootState {
    homePage: HomePageState;
    productsPage: ProductsPageState;
    ordersPage: OrdersPageState;
};

/** HOMEPAGE*/ 
export interface HomePageState {
    popularDishes: Product[];
    newDishes: Product[];
    topUsers: Member[];
};

/* PRODUCTS PAGE */
export interface ProductsPageState {
    restaurant: Member | null;
    choosenProduct: Product | null;
    products: Product[];
};


/* ORDERS PAGE*/ 
export interface OrdersPageState {
    pausedOrders: Order [];
    processOrders: Order[];
    finishedOrders: Order[];
};