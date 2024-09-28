import React, { ChangeEvent, useEffect, useState } from "react";
import {Box, Button, Container, InputBase, Stack} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon  from "@mui/icons-material/MonetizationOn";
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
    const [ productSearch, setProductSearch ] = useState<ProductInquiry>({
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
        if(searchText === "" ) {
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

    const searchOrderHandler = ( order: string ) => {
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
    <div className={"products"}>
        <Container>
            <Stack flexDirection={"column"} alignItems={"center"}>
                <Stack className={"avatar-big-box"}>
                    <Box className={"top-text"}>Burak Restaurant</Box>
                    <InputBase type="text" placeholder="  Type here..." className={"input"}
                      value={searchText}
                      onChange={(e) => {
                        setSearchText(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if(e.key === "Enter") searchProductHandler();
                      }}/>
                    <Button className={"search-btn"} variant="contained" color="primary"
                      onClick={searchProductHandler}>
                        Search 
                        <SearchIcon/>
                    </Button>
                </Stack>

                <Stack className={"dishes-filter-section"}>
                    <Button 
                      variant={"contained"}
                      color={ productSearch.order === "createdAt" ? "primary" : "secondary"}
                      className={"order"}
                      onClick={() => searchOrderHandler("createdAt")}>
                        New
                    </Button>
                    <Button 
                      variant={"contained"}
                      color={productSearch.order === "productPrice" ? "primary" : "secondary"}
                      className={"order"}
                      onClick={() => searchOrderHandler("productPrice")}>
                        Price
                    </Button>
                    <Button 
                      variant={"contained"}
                      color={productSearch.order === "productViews" ? "primary" : "secondary"}
                      className={"order"}
                      onClick={() => searchOrderHandler("productViews")}>
                        Views
                    </Button>
                </Stack>

                <Stack className={"list-category-section"}>
                    <Stack className={"product-category"}>
                        <div className={"category-main"}>
                            <Button className={"filter-btn"} variant={"contained"} color={ productSearch.productCollection === ProductCollection.OTHER ? "primary" : "secondary"}
                              onClick={() => searchCollectionHandler(ProductCollection.OTHER)}>
                                Other
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={ productSearch.productCollection === ProductCollection.DESSERT ? "primary" : "secondary"}
                              onClick={() => searchCollectionHandler(ProductCollection.DESSERT)}>
                                Dessert
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={ productSearch.productCollection === ProductCollection.DRINK ? "primary" : "secondary"}
                              onClick={() => searchCollectionHandler(ProductCollection.DRINK)}>
                                Drink
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={ productSearch.productCollection === ProductCollection.SALAD ? "primary" : "secondary"}
                              onClick={() => searchCollectionHandler(ProductCollection.SALAD)}>
                                Salad
                            </Button>
                            <Button className={"filter-btn"} variant={"contained"} color={ productSearch.productCollection === ProductCollection.DISH ? "primary" : "secondary" }
                              onClick={() => searchCollectionHandler(ProductCollection.DISH)}>
                                Dish
                            </Button>
                        </div>
                    </Stack>

                    <Stack className={"product-wrapper"}>
                    {products.length!== 0 ? (
                            products.map((product: Product) => {
                                const imagePath = `${serverApi}/${product.productImages[0]}`;
                                const sizeVolume = 
                                product.productCollection === ProductCollection.DRINK 
                                ? product.productVolume + "litre" 
                                : product.productSize + "size";
                                return ( 
                                <Stack key={product._id} className={"product-card"} onClick={() => chooseDishHandler(product._id)} >
                                    <Stack
                                      className={"product-img"}
                                      sx={{backgroundImage: `url(${imagePath})`}}
                                     >
                                        <div className={"product-sale"}>{sizeVolume}</div>
                                        <Button className={"shop-btn"}
                                        onClick={(e) => {
                                            onAdd({
                                                _id: product._id,
                                                quantity: 1,
                                                name: product.productName,
                                                price: product.productPrice,
                                                image: product.productImages[0],
                                            });
                                           e.stopPropagation(); 
                                        }}>
                                            <img src={"/icons/shopping-cart.svg"}
                                              style={{display: "flex"}} />
                                        </Button>
                                        <Button className={"views-btn"}>
                                            <Badge badgeContent={product.productViews} color="secondary">
                                                <RemoveRedEyeIcon className={"eye-btn"}
                                                  sx={{
                                                    color: product.productViews === 0 ? "gray" : "white",
                                                  }} />
                                            </Badge>
                                        </Button>
                                     </Stack>
                                     <Box className={"product-desc"}>
                                        <span className={"product-title"}>
                                            {product.productName}
                                        </span>
                                        <div className={"product-des"}>
                                           <MonetizationOnIcon />
                                            {product.productPrice}
                                        </div>
                                     </Box>
                                </Stack>
                                );
                            }) ) : (<Box className={"no-data"}> No Product List!!</Box>)}
                    </Stack>
                </Stack>

                <Stack className={"pagination-section"}>
                    <Pagination 
                      count={products.length !== 0 ? productSearch.page + 1 : productSearch.page }
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

        <div className={"brands-logo"}>
            <Container className={"family-brands"}>
                <Box className={"category-title"}>Our Family Brands</Box>
                <Stack className={"brand-list"}>
                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>

                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>

                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>

                    <Box className={"review-box"}>
                        <img src={"/img/gurme.webp"} />
                    </Box>
                </Stack>
                    
            </Container>
        </div>

        <div className={"address"}>
            <Container>
                <Stack className={"address-area"}>
                    <Box className={"title"}>Our Address</Box>
                    <iframe
                      style={{marginTop: "60px"}}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1581.9573897862667!2d126.99419083893493!3d37.53350611999727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2363a08fae9%3A0xb0cbcaa2a1b0a156!2sLazzat!5e0!3m2!1sen!2skr!4v1721257612631!5m2!1sen!2skr"
                      width="1320"
                      height="500"
                      referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </Stack>
            </Container>
        </div>
    </div>
);
}