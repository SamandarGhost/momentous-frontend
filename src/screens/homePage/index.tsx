import React, { useEffect } from 'react';
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../css/home.css";
import { useDispatch } from 'react-redux';
import { setNewDishes, setPopularDishes, setTopUsers } from './slice'; 
import { Dispatch } from '@reduxjs/toolkit';
import { Product } from '../../lib/types/product';
import ProductService from '../../app/services/ProductService';
import { ProductCollection } from '../../lib/enums/product.enum';
import MemberService from '../../app/services/MemeberService';
import { Member } from '../../lib/types/member';

/* REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
    setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
    setTopUSers: (data: Member[]) => dispatch(setTopUsers(data)),
});
export default function HomePage() {
  const { setPopularDishes, setNewDishes, setTopUSers } = actionDispatch(useDispatch());
  
    useEffect(() => {
        // Backend server data fetch => Data
        const product = new ProductService();
        product.getProducts({
            page: 1,
            limit: 4,
            order: "productViews",
            productCollection: ProductCollection.DISH,
        })
        .then(data => {
            console.log("data passed here");
            setPopularDishes(data);
        }).catch((err) => console.log(err));

        product.getProducts({
            page: 1,
            limit: 4,
            order: "createdAt",
            productCollection: ProductCollection.DISH,
        })
        .then(data => {
            console.log("data passed here");
            setNewDishes(data);
        }).catch((err) => console.log(err));

        const member = new MemberService();
        member
        .getTopUsers()
        .then((data) => setTopUSers(data))
        .catch((err) => console.log(err));
    }, [])

    return (<div className={"homepage"}>
        <Statistics />
        <PopularDishes />
        <NewDishes />
        <Advertisement />
        <ActiveUsers />
        <Events />
    </div>);
  }