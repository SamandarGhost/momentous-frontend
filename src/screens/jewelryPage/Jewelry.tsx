import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, InputBase, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/jewelry.css";
import { setJewelries } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product, ProductInquiry } from "../../lib/types/product";
import { retrieveJewelries } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../app/services/JewelryService";
import { ProductCollection } from "../../lib/enums/product.enum";
import { serverApi } from "../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../lib/types/search";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined';
import { Jewelry } from "../../lib/types/jewelry";
/* Redux Slice and Selector */
const actionDispatch = (dispatch: Dispatch) => ({
    setJewelries: (data: Jewelry[]) => dispatch(setJewelries(data)),
});
const jewelriesRetriever = createSelector(retrieveJewelries, (jewelries) => ({
    jewelries,
}));

interface ProductsProps {
    onAdd: (item: CartItem) => void;
}


export default function JewelryPage(props: ProductsProps) {
    const { onAdd } = props;
    const { setJewelries } = actionDispatch(useDispatch());
    const { jewelries } = useSelector(jewelriesRetriever);
    const [productSearch, setProductSearch] = useState<ProductInquiry>({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
    });
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        const product = new ProductService();

    }, [productSearch]);

    useEffect(() => {
        if (searchText === "") {
            productSearch.search = "";
            setProductSearch({ ...productSearch });
        }
    }, []);

    const history = useHistory();

    /* Handler */
    const searchCollectionHandler = (collection: ProductCollection) => {
        productSearch.page = 1;
        productSearch.productCollection = collection;
        setProductSearch({ ...productSearch });
    };

    const searchOrderHandler = (order: string) => {
        productSearch.page = 1;
        productSearch.order = order;
        setProductSearch({ ...productSearch });
    };

    const searchProductHandler = () => {
        productSearch.search = searchText;
        setProductSearch({ ...productSearch });
    };

    const chooseDishHandler = (id: string) => {
        history.push(`/products/${id}`);
    };

    const paginationHandler = (e: ChangeEvent<any>, value: number) => {
        productSearch.page = value;
        setProductSearch({ ...productSearch });
    };

    return (
        <div className={"jewelry"}>
            <Container className={'jewelry-cnt'}>
                <Stack className={'top'}>
                    <Stack className={'top-bar'}>
                        <Box className={'gender-btn'}>
                            <Button className={'male-btn'}>
                                Man
                            </Button>
                            <Button className={'female-btn'}>
                                Woman
                            </Button>
                        </Box>
                        <Box className={'search'}>
                            <InputBase className={'search-input'} />
                            <Button className={'search-btn'}>
                                Search
                                <SearchIcon className={'finder'} />
                            </Button>
                        </Box>
                        <Stack className={'sorting'}>
                            <Typography className={'sort-name'}>Sort:</Typography>
                            <Button className={'menu-btn'}>
                                <KeyboardArrowDownOutlinedIcon className={'dawn-line'} />
                            </Button>
                            <Menu open={false} className={'menu'}>
                                <MenuItem className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "20px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    New
                                </MenuItem>
                                <MenuItem className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "20px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    View
                                </MenuItem>
                                <MenuItem className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "20px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Lowest Price
                                </MenuItem>
                                <MenuItem className={'menu-item'} sx={{ fontFamily: "Roboto Serif", fontSize: "20px", fontWeight: "lighter", letterSpacing: "2px" }}>
                                    Highest Price
                                </MenuItem>
                            </Menu>
                        </Stack>
                    </Stack>
                    <Stack className={'category-jewelry'}>
                        <Stack className={'category-first'}>
                            <Typography className={'category-jewelry-title'}>Category:</Typography>
                            <Box className={'material'}>
                                <Button className={'mtr-btn'}>Gold
                                    <TripOriginOutlinedIcon className={'gold'} />
                                </Button>
                                <Button className={'mtr-btn'}>Silver
                                    <TripOriginOutlinedIcon className={'silver'} />
                                </Button>
                                <Button className={'mtr-btn'}>Titanium
                                    <TripOriginOutlinedIcon className={'titanium'} />
                                </Button>
                                <Button className={'mtr-btn'}>Platinum
                                    <TripOriginOutlinedIcon className={'platinum'} />
                                </Button>
                            </Box>
                        </Stack>
                        <Box className={'category-box'}>
                            <Button className={'bracelets'}>
                                Bracelets
                            </Button>
                            <Button className={'necklaces'}>
                                Necklaces
                            </Button>
                            <Button className={'rings'}>
                                Rings
                            </Button>
                            <Button className={'earings'}>
                                Earings
                            </Button>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={'jewelry-frame'}>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack className={'card'}>
                        <Stack className={'card-img'}>
                            <img src="/img/rings.webp" className={'img'} alt="" />
                        </Stack>
                        <Box className={'buttons'}>
                            <Box className={'sale-btns'}>
                                <Button className={'buy'}>Buy Now
                                    <AttachMoneyOutlinedIcon className={'icons'} />
                                </Button>
                                <Button className={'add-to'}>
                                    Add To
                                    <LocalMallOutlinedIcon className={'icons'} />
                                </Button>
                            </Box>
                            <Box className={'view-btns'}>
                                <Typography className={"views"}>20
                                    <VisibilityIcon
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <Typography className={"views"}>20
                                    <FavoriteOutlinedIcon className={'like'}
                                        sx={{ fontSize: 22, marginLeft: "5px" }}
                                    />
                                </Typography>
                                <BookmarkBorderOutlinedIcon className={'book-mark'} />
                            </Box>
                        </Box>
                        <Box className={'info-list'}>
                            <Box className={'info'}>
                                <Typography className={'jewelry-name'}>Bracelets</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>2.000$</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Gold</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                            <Box className={'info'}>
                                <Typography className={'jewelry'}>Woman</Typography>
                                <p className={'yes'}>
                                    <CheckIcon className={'star'} />
                                </p>
                            </Box>
                        </Box>
                    </Stack>
                </Stack>

                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"pagination-section"}>
                        <Pagination
                            count={jewelries.length !== 0 ? productSearch.page + 1 : productSearch.page}
                            page={productSearch.page}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                />
                            )}
                            onChange={paginationHandler}
                        />
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}