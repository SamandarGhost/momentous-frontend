import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../app/components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../lib/types/product";
import { Member } from "../../lib/types/member";
import { useParams } from "react-router-dom";
import MemberService from "../../app/services/MemeberService";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../lib/config";
import { CartItem } from "../../lib/types/search";

interface ChosenProductProps {
    onAdd: (item: CartItem) => void;
}

export default function WatchDetail(props: ChosenProductProps) {
    const { onAdd } = props;

    return (
        <div className={"chosen-product"}>
            <Box className={"title"}>Product Detail</Box>
            <Container className={"product-container"}>
                <Stack className={"chosen-product-slider"}>
                    <Swiper
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="swiper-area"
                    >
                        <SwiperSlide >
                            <img className="slider-image" src="" />
                        </SwiperSlide>
                    </Swiper>
                </Stack>
                <Stack className={"chosen-product-info"}>
                    <Box className={"info-box"}>
                        <strong className={"product-name"}>
                            Watch
                        </strong>
                        <span className={"resto-name"}>Rolex</span>
                        <span className={"resto-name"}>01048675455</span>
                        <Box className={"rating-box"}>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            <div className={"evaluation-box"}>
                                <div className={"product-view"}>
                                    <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                                    <span>30</span>
                                </div>
                            </div>
                        </Box>
                        <p className={"product-desc"}>
                            "No description"
                        </p>
                        <Divider height="1" width="100%" bg="#000000" />
                        <div className={"product-price"}>
                            <span>Price:</span>
                            <span>$4.000</span>
                        </div>
                        <div className={"button-box"}>
                            <Button
                                variant="contained"
                            >
                                Add To Basket
                            </Button>
                        </div>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}