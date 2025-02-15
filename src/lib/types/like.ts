import { LikeGroup } from "../enums/like.enum";

export interface Like {
    _id: string;
    likeGroup: LikeGroup;
    likeRefId: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
};

export interface MeLiked {
    memberId: string;
    likeRefId: string;
    myLikely: boolean;
}