import React, { useEffect } from 'react';
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import "../../css/home.css";
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { Product } from '../../lib/types/product';
import ProductService from '../../app/services/JewelryService';
import { ProductCollection } from '../../lib/enums/product.enum';
import MemberService from '../../app/services/MemeberService';
import { Member } from '../../lib/types/member';
import TrendJewelries from './TrendJewelries';
import CategoryJewelries from './CategoryJewelries';
import CategoryWatch from './CategoryWatch';
import PopularWatches from './PopularWatches';
import OurStore from './OurStore';
import { setPopularWatch, setTopUsers, setTrendJewelry } from './slice';
import { Jewelry } from '../../lib/types/jewelry';
import { Watch } from '../../lib/types/watch';
import JewelryService from '../../app/services/JewelryService';
import { JewelryType } from '../../lib/enums/jewelry.enum';
import { ProductGender } from '../../lib/types/common';
import WatchService from '../../app/services/WatchService';

/* REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
    setTrendJewelry: (data: Jewelry[]) => dispatch(setTrendJewelry(data)),
    setPopularWatch: (data: Watch[]) => dispatch(setPopularWatch(data)),
    setTopUSers: (data: Member[]) => dispatch(setTopUsers(data)),
});
export default function HomePage() {
    const { setTrendJewelry, setPopularWatch, setTopUSers } = actionDispatch(useDispatch());

    useEffect(() => {
        // Backend server data fetch => Data
        const jewelry = new JewelryService();
        const watch = new WatchService();

        jewelry.getJewelries({
            page: 1,
            limit: 4,
            order: "jewelryViews",
            jewelryGender: ProductGender.WOMAN,
        })
            .then(data => {
                console.log("data passed here");
                setTrendJewelry(data);
            }).catch((err) => console.log(err));

        watch.getWatches({
            page: 1,
            limit: 4,
            order: "createdAt",
            watchGender: ProductGender.MAN,
        })
            .then(data => {
                console.log("data passed here");
                setPopularWatch(data);
            }).catch((err) => console.log(err));

        const member = new MemberService();
        member
            .getTopUsers()
            .then((data) => setTopUSers(data))
            .catch((err) => console.log(err));
    }, [])

    return (<div className={"homepage"}>
        <CategoryJewelries />
        <TrendJewelries />
        <CategoryWatch />
        <PopularWatches />
        <Advertisement />
        <ActiveUsers />
        <OurStore />
    </div>);
}