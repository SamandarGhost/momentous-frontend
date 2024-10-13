import { WatchBrand, WatchFunc, WatchMov } from "../enums/watch.enum";
import { ProductGender, ProductStatus } from "./common";
import { MeLiked } from "./like";
import { MeSaved } from "./save";


export interface Watch {
    _id: string;
    watchStatus: ProductStatus;
    watchGender: ProductGender
    watchFunc: WatchFunc;
    watchMov: WatchMov;
    watchBrand: WatchBrand
    watchName: string;
    watchPrice: number;
    watchDetail: string;
    watchDesc?: string;
    watchImages: string[];
    watchViews: number;
    watchLikes: number;
    watchComments: number;
    createdAt: Date;
    updatedAt: Date;
    meLikely?: MeLiked;
    meSaved?: MeSaved;
}

export interface WatchInquiry {
    order: string;
    page: number;
    limit: number;
    watchBrand?: WatchBrand;
    watchGender?: ProductGender;
    search?: string;
}