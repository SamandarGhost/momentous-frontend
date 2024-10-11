import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Container, InputBase, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "../../css/products.css";
import { setProducts } from "./slice";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { Product, ProductInquiry } from "../../lib/types/product";
import { retrieveProducts } from "./selector";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../app/services/ProductService";
import { ProductCollection } from "../../lib/enums/product.enum";
import { serverApi } from "../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../lib/types/search";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CheckIcon from '@mui/icons-material/Check';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

/* Redux Slice and Selector */
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data)),
});
const productsRetriever = createSelector(retrieveProducts, (products) => ({
    products,
}));

interface ProductsProps {
    onAdd: (item: CartItem) => void;
}


export default function Products(props: ProductsProps) {
    const { onAdd } = props;
    const { setProducts } = actionDispatch(useDispatch());
    const { products } = useSelector(productsRetriever);
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

        product.getProducts(productSearch).then((data) => setProducts(data)).catch((err) => console.log(err));
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
        <div className={"watches"}>
            <Container className={'watch-cnt'}>
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
                    <Stack className={'filter'}>
                        <Typography className={'brands-name'}>Brands</Typography>
                        <Box className={'brend-collection'}>
                            <Button className={'brend-btn'}>Rolex</Button>
                            <Button className={'brend-btn'}>Cartier</Button>
                            <Button className={'brend-btn'}>Casio</Button>
                            <Button className={'brend-btn'}>Omega</Button>
                            <Button className={'brend-btn'}>Seiko</Button>
                            <Button className={'brend-btn'}>Bvlgari</Button>
                            <Button className={'brend-btn'}>Boss</Button>
                            <Button className={'brend-btn'}>Versace</Button>
                            <Button className={'brend-btn'}>Audemar</Button>
                            <Button className={'brend-btn'}>Chanel</Button>
                            <Button className={'brend-btn'}>Gucci</Button>
                            <Button className={'brend-btn'}>Armani</Button>
                            <Button className={'brend-btn'}>Hamilton</Button>
                            <Button className={'brend-btn'}>Citizen</Button>
                            <Button className={'brend-btn'}>Olivia</Button>
                            <Button className={'brend-btn'}>Timex</Button>
                            <Button className={'brend-btn'}>Tissot</Button>
                        </Box>
                    </Stack>
                    <Stack className={'category-watch'}>
                        <Typography className={'category-watch-title'}>Category</Typography>
                        <Box className={'category-box'}>
                            <Button className={'category-btn'}>Analogue</Button>
                            <Button className={'category-btn'}>Chronograph</Button>
                            <Button className={'category-btn'}>Digital</Button>
                            <Button className={'category-btn'}>Hybrid</Button>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={'card'}>
                    <Stack className={'card-img'}>
                        <img src="/img/cartier.png" className={'img'} alt="" />
                    </Stack>
                    <Box className={'buttons'}>
                        <Button className={'buy'}>Buy Now
                            <AttachMoneyOutlinedIcon />
                        </Button>
                        <Button className={'add-to'}>
                            <LocalMallOutlinedIcon />
                        </Button>
                        <Typography className={"views"}>20
                            <VisibilityIcon
                                sx={{ fontSize: 24, marginLeft: "10px" }}
                            />
                        </Typography>
                        <Typography className={"views"}>20
                            <FavoriteBorderOutlinedIcon
                                sx={{ fontSize: 24, marginLeft: "10px" }}
                            />
                        </Typography>
                        <BookmarkBorderOutlinedIcon />
                    </Box>
                    <Box className={'info-list'}>
                        <Box className={'info'}>
                            <Typography className={'watch-name'}>Cartier Luxury Watch</Typography>
                            <p className={'yes'}>
                                <CheckIcon className={'star'} />
                            </p>
                        </Box>
                        <Box className={'info'}>
                            <Typography className={'watch-price'}>2.000$</Typography>
                            <p className={'yes'}>
                                <CheckIcon className={'star'} />
                            </p>
                        </Box>
                        <Box className={'info'}>
                            <Typography className={'watch-func'}>Automatic</Typography>
                            <p className={'yes'}>
                                <CheckIcon className={'star'} />
                            </p>
                        </Box>
                        <Box className={'info'}>
                            <Typography className={'watch-gender'}>Man</Typography>
                            <p className={'yes'}>
                                <CheckIcon className={'star'} />
                            </p>
                        </Box>
                    </Box>
                </Stack>

                <Stack flexDirection={"column"} alignItems={"center"}>
                    <Stack className={"pagination-section"}>
                        <Pagination
                            count={products.length !== 0 ? productSearch.page + 1 : productSearch.page}
                            page={productSearch.page}
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{
                                        previous: ArrowBackIcon,
                                        next: ArrowForwardIcon,
                                    }}
                                    {...item}
                                    color={"secondary"}
                                />
                            )}
                            onChange={paginationHandler}
                        />
                    </Stack>
                </Stack>
            </Container>

            {/* <div className={"address"}>
                <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our Address</Box>
                        <iframe
                            style={{ marginTop: "60px" }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.9573897862667!2d126.99419083893493!3d37.53350611999727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2363a08fae9%3A0xb0cbcaa2a1b0a156!2sLazzat!5e0!3m2!1sen!2skr!4v1721257612631!5m2!1sen!2skr"
                            width="1320"
                            height="500"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div> */}
        </div>
    );
}